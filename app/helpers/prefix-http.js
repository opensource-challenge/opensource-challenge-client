import { helper as buildHelper } from '@ember/component/helper';

export function prefixHttp([url]) {
  if (url == null) {
    return ''
  }
  return url.indexOf('http') === 0 ? url : `http://${url}`
}

export default buildHelper(prefixHttp)
