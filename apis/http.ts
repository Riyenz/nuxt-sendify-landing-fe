import axios from 'axios'
import { JWT_KEY } from '~/constants/keys.const'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

const http = (options = {}, version = 'v1') => {
  const url = process.env.NUXT_ENV_BASE_URL

  const token = localStorage.getItem(JWT_KEY)

  const defaultOptions = {
    baseURL: `${url}/${version}`,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  }

  const opts = Object.assign({}, defaultOptions, options)

  let http = axios.create(opts)

  http.interceptors.response.use(
    (response) => response.data,
    (err) => {
      if (err.response.status === 400) {
        window.bus.$emit('bad-request')
      }
      if (err.response.status === 401) {
        window.bus.$emit('unauthorized')
      }
      throw new Error(err.response.data.message)
    }
  )

  return http
}

export default http
