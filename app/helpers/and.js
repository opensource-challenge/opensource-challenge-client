import { helper as buildHelper } from '@ember/component/helper';

export function and(params) {
  return params.every(Boolean)
}

export default buildHelper(and)
