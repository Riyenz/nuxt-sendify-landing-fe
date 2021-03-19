import { ISample } from '~/interfaces/sample.interface';

export const INIT_SAMPLE: ISample = {
  id: 0,
  isSomething: false,
};

export class Sample implements ISample {
  id;
  isSomething;

  constructor(sample: ISample = INIT_SAMPLE) {
    this.id = sample.id;
    this.isSomething = sample.isSomething;
  }
}
