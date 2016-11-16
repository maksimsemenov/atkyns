import { phone, required, validateValue, date } from 'utils/validators'

describe('Phone validator', () => {
  it('Shouldn\'t return error for correct phone', () => {
    expect(phone('+1 234-567-8900')).toBeUndefined()
    expect(phone('(01) 55 1234 5678')).toBeUndefined()
    expect(phone('(01 55) 1234 5678')).toBeUndefined()
    expect(phone('(55) 1234 5678')).toBeUndefined()
    expect(phone('6641234567')).toBeUndefined()
    expect(phone('664 123 4567')).toBeUndefined()
    expect(phone('(044) 664 123 4567')).toBeUndefined()
    expect(phone('123-456-7890')).toBeUndefined()
    expect(phone('12345 678 90')).toBeUndefined()
    expect(phone('+12 3456 789009')).toBeUndefined()
  })
  it('Should return error for incorrect phone', () => {
    expect(phone('+1   3123213')).toEqual('%-error-wrongPhone')
    expect(phone('1231 dasd 313')).toEqual('%-error-wrongPhone')
    expect(phone('213..231.2313')).toEqual('%-error-wrongPhone')
    expect(phone('ABB-21321-23')).toEqual('%-error-wrongPhone')
    expect(phone('+1 )242)-43234')).toEqual('%-error-wrongPhone')
    expect(phone('-1232-2131-3231')).toEqual('%-error-wrongPhone')
  })
})

describe('Date validator', () => {
  it('Should\'t return error for correct date', () => {
    expect(date('MM/DD/YYYY')('02/21/2016')).toBeUndefined()
    expect(date('MM/DD/YYYY')('12/31/2016')).toBeUndefined()
    expect(date('DD/MM/YYYY')('02/10/2016')).toBeUndefined()
  })
  it('Should return error for incorrect date', () => {
    expect(date('DD/MM/YYYY')('02/21/2016')).toEqual('Wrong date')
    expect(date('DD/MM/YYYY')('32/10/2016')).toEqual('Wrong date')
    expect(date('DD/MM/YYYY')('02/21/16')).toEqual('Wrong date')
    expect(date('MM/DD/YYYY')('00/00/0000')).toEqual('Wrong date')
    expect(date('DD/MM/YYYY')('11/11/1111')).toEqual('Wrong date')
    expect(date('DD/MM/YYYY')('23/21/2016')).toEqual('Wrong date')
    expect(date('DD/MM/YYYY')('32/1/2016')).toEqual('Wrong date')
  })
})

it('validateValue function', () => {
  const validators = [required]
  expect(validateValue('', validators)).toEqual('%-error-emptyField')
})
