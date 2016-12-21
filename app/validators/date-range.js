import moment from 'moment'

export default function validateDateRange(options) {
  return (key, newValue) => {
    let date = moment(newValue)

    return date >= moment(options.min) && date <= moment(options.max)
  }
}
