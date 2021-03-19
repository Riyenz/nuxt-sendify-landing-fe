export interface ISample {
  id: string | number;
  isSomething: boolean;
  children?: ISample[];
}
