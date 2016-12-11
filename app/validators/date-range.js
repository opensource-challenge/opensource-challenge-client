import moment from 'moment'

export default function validateDateRange(options) {
  return (key, newValue) => {
    return moment().range(options.min, options.max).contains(moment(newValue), false)
  }
}
