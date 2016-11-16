import l from 'utils/local'

const isEmpty = value => value === undefined || value === null || value === ''

export const email = (value) => {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return '%-error-wrongEmail'
  }
}

export const phone = (value) => {
  if (!isEmpty(value) && !/^\+?(\(?\d{1,6}\)?[\s\.\-]?){2,4}$/g.test(value)) {
    return '%-error-wrongPhone'
  }
}

export const required = (value) => {
  if (isEmpty(value)) {
    return '%-error-emptyField'
  }
}

export const date = format => value => {
  let reg = new RegExp(format
    .replace('MM', '(0[1-9]|1[0-2])')
    .replace('DD', '(0[1-9]|[12][0-9]|3[01])')
    .replace('YYYY', '(19|20)[0-9]{2}'))
    console.log(reg, format, value, reg.test(value))

  if (!isEmpty(value) && !reg.test(value)) {
    return l('Wrong date')
  }
}

export const validateValue = (value, validators) =>
  validators.reduce((error, validator) => error || validator(value), undefined)
