import maskString from 'utils/maskString'

it('maskString should mask string correctly', () => {
  expect(maskString('123234567', '000-000-0000')).toEqual('123-234-567')
  expect(maskString('12-323-4567', '000-000-0000')).toEqual('123-234-567')
  expect(maskString('123.456.7890', '000-000-0000')).toEqual('123-456-7890')
  expect(maskString('1234', '000-000-0000')).toEqual('123-4')
  expect(maskString('123.456', '000-000-0000')).toEqual('123-456')
  expect(maskString('123-456-', '000-000-0000')).toEqual('123-456-')
  expect(maskString('+1 234 567 8900', '+0 000-000-0000')).toEqual('+1 234-567-8900')
  expect(maskString('+', '+0 000-000-0000')).toEqual('+')
  expect(maskString('-', '+0 000-000-0000')).toEqual('')
  expect(maskString('123', '+0 (000) 000-0000')).toEqual('+1 (23')
})
