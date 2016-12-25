import moment from 'moment'

export default function validateDateRange(options) {
  return (key, newValue) => {
    let date = moment.utc(newValue)

    return date >= moment.utc(options.min) && date <= moment.utc(options.max)
  }
}
