import { ISample } from '~/interfaces/sample.interface';

import http from './http';

const endpoint = 'sample';

const SamplesAPI = {
  getAll: () => http().get<ISample[]>(endpoint),
  create: (sample: ISample) => http().post<{ id: number; }>(endpoint, sample),
  get: (id: number | string) => http().get<ISample>(`${endpoint}/${id}`),
  patch: (id: number | string, sample: ISample) =>
    http().patch<{ message: string; }>(`${endpoint}/${id}`, sample),
  put: (id: number | string, sample: ISample) =>
    http().put<{ message: string; }>(`${endpoint}/${id}`, sample),
  delete: (id: number | string) =>
    http().delete<{ message: string; }>(`${endpoint}/${id}`),
};

export default SamplesAPI;
