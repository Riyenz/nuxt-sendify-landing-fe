const MODULE_STATE = {
  appName: process.env.APP_NAME || 'NO_APP_NAME',
  installUrl: process.env.NUXT_ENV_APP_INSTALL_URL,
}

export const state = () => MODULE_STATE

export const getters = {
  appName: (state: typeof MODULE_STATE) => state.appName,
  installUrl: (state: typeof MODULE_STATE) => state.installUrl,
}

export const mutations = {}

export const actions = {}
