import React from 'react'
import renderer from 'react-test-renderer'
import Selectbox from './Selectbox'

describe('Selectbox component', () => {
  it('Snapshot test', () => {
    const options = [
      { name: 'Option 1', value: 'option1' },
      { name: 'Option 2', value: 'option2' },
      { name: 'Option 3', value: 'option3' }
    ]
    const value = 'option1'
    const onChange = () => {}
    const params = { options, value, onChange}
    const tree = renderer.create(<Selectbox {...params} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
