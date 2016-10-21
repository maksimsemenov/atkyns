import React from 'react'
import ReactDOM from 'react-dom'
import Selector from 'components/Selector/Selector'

describe('Selector component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const options = [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' }
    ]
    const onChange = () => {}
    const params = { options, onChange}
    ReactDOM.render(<Selector {...params} />, div)
  })
})
