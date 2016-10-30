const isEmpty = value => value === undefined || value === null || value === ''

export const email = (value) => {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return '%-error-wrongEmail'
  }
}

export const url = (value) => {
  if (!isEmpty(value) && !/^(https?:\/\/)?([a-z0-9\-_]+\.[a-z]{2,6})[:a-z0-9#\?=_\.\-\/]*/ig.test(value)) {
    return '%-error-wrongUrl'
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

export const minLength = (min) => value => {
  if (!isEmpty(value) && value.length < min) {
    return `Must be at least ${min} characters`
  }
}

export const maxLength = (max) => value => {
  if (!isEmpty(value) && value.length > max) {
    return `Must be no more than ${max} characters`
  }
}

export const validateValue = (value, validators) =>
  validators.reduce((error, validator) => error || validator(value), undefined)
