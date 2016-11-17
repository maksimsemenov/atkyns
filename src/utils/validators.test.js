import * as v from 'utils/validators'

describe('Phone validator', () => {
  it('Shouldn\'t return error for correct phone', () => {
    expect(v.phone('+1 234-567-8900')).toBeUndefined()
    expect(v.phone('(01) 55 1234 5678')).toBeUndefined()
    expect(v.phone('(01 55) 1234 5678')).toBeUndefined()
    expect(v.phone('(55) 1234 5678')).toBeUndefined()
    expect(v.phone('6641234567')).toBeUndefined()
    expect(v.phone('664 123 4567')).toBeUndefined()
    expect(v.phone('(044) 664 123 4567')).toBeUndefined()
    expect(v.phone('123-456-7890')).toBeUndefined()
    expect(v.phone('12345 678 90')).toBeUndefined()
    expect(v.phone('+12 3456 789009')).toBeUndefined()
  })
  it('Should return error for incorrect phone', () => {
    expect(v.phone('+1   3123213')).toEqual('%-error-wrongPhone')
    expect(v.phone('1231 dasd 313')).toEqual('%-error-wrongPhone')
    expect(v.phone('213..231.2313')).toEqual('%-error-wrongPhone')
    expect(v.phone('ABB-21321-23')).toEqual('%-error-wrongPhone')
    expect(v.phone('+1 )242)-43234')).toEqual('%-error-wrongPhone')
    expect(v.phone('-1232-2131-3231')).toEqual('%-error-wrongPhone')
  })
})

describe('Date validator', () => {
  it('Should\'t return error for correct date', () => {
    expect(v.date('MM/DD/YYYY')('02/21/2016')).toBeUndefined()
    expect(v.date('MM/DD/YYYY')('12/31/2016')).toBeUndefined()
    expect(v.date('DD/MM/YYYY')('02/10/2016')).toBeUndefined()
  })
  it('Should return error for incorrect date', () => {
    expect(v.date('DD/MM/YYYY')('02/21/2016')).toEqual('Wrong date')
    expect(v.date('DD/MM/YYYY')('32/10/2016')).toEqual('Wrong date')
    expect(v.date('DD/MM/YYYY')('02/21/16')).toEqual('Wrong date')
    expect(v.date('MM/DD/YYYY')('00/00/0000')).toEqual('Wrong date')
    expect(v.date('DD/MM/YYYY')('11/11/1111')).toEqual('Wrong date')
    expect(v.date('DD/MM/YYYY')('23/21/2016')).toEqual('Wrong date')
    expect(v.date('DD/MM/YYYY')('32/1/2016')).toEqual('Wrong date')
  })
})

describe('Zip code validator', () => {
  it('Should\'t return error for correct date', () => {
    expect(v.zip('620000')).toBeUndefined()
    expect(v.zip('11229')).toBeUndefined()
    expect(v.zip('10011')).toBeUndefined()
    expect(v.zip('58701-0124')).toBeUndefined()
    expect(v.zip()).toBeUndefined()
  })
  it('Should return error for incorrect date', () => {
    expect(v.zip('23213443')).toEqual('Wrong zip code')
    expect(v.zip('123')).toEqual('Wrong zip code')
    expect(v.zip('123-32')).toEqual('Wrong zip code')
    expect(v.zip('123-32312323')).toEqual('Wrong zip code')
  })
})

it('validateValue function', () => {
  const validators = [v.required]
  expect(v.validateValue('', validators)).toEqual('%-error-emptyField')
})
