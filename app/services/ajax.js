import ENV from '../config/environment'
import AjaxService from 'ember-ajax/services/ajax'

export default AjaxService.extend({
  host: ENV.APP.host,
  namespace: 'api/v1'
})
