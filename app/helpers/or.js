import { helper } from '@ember/component/helper';

export function or(values) {
  return values.some(Boolean)
}

export default helper(or)
