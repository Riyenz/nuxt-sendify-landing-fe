import { required } from 'vuelidate/lib/validators';


export const SAMPLE_DETAILS_VALIDATIONS = {
  sanple: {
    id: {
      required,
    },
    isSomething: {
      required,
    },
  },
};
