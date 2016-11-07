import React from 'react'
import renderer from 'react-test-renderer'
import Selector from './Selector'

describe('Selector component', () => {
  it('renders without craches', () => {
    const options = [
      { name: 'Option 1', value: 'option1' },
      { name: 'Option 2', value: 'option2' },
      { name: 'Option 3', value: 'option3' }
    ]
    const onChange = () => {}
    const params = { options, onChange}
    const tree = renderer.create(<Selector {...params} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
