import { url, phone, required, validateValue } from 'utils/validators'

describe('URL validator', () => {
  it('Shouldn\'t return an error for correct URLs', () =>{
    expect(url('http://example.com')).toBeUndefined()
    expect(url('https://example.com')).toBeUndefined()
    expect(url('example.com')).toBeUndefined()
    expect(url('wwww.example.com')).toBeUndefined()
    expect(url('http://example.com/?utm_source=orchectra')).toBeUndefined()
    expect(url('')).toBeUndefined()
  })
  it('Should return an error for incorrect URLs', () =>{
    expect(url('htp://example.com')).toEqual('%-error-wrongUrl')
    expect(url('https:///example.com')).toEqual('%-error-wrongUrl')
    expect(url('example.c')).toEqual('%-error-wrongUrl')
    expect(url('htps://.example.com')).toEqual('%-error-wrongUrl')
    expect(url('ftp://example.com/?utm_source=orchectra')).toEqual('%-error-wrongUrl')
    expect(url('6')).toEqual('%-error-wrongUrl')
    expect(url('http://example with space.com')).toEqual('%-error-wrongUrl')
  })
})

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

it('validateValue function', () => {
  const validators = [required]
  expect(validateValue('', validators)).toEqual('%-error-emptyField')
})
