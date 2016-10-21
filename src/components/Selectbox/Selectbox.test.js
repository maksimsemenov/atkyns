import React from 'react'
import ReactDOM from 'react-dom'
import Selectbox from 'components/Selectbox/Selectbox'

describe('Selectbox component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const options = [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' }
    ]
    const active = 'Option 1'
    const onChange = () => {}
    const params = { options, active, onChange}
    ReactDOM.render(<Selectbox {...params} />, div)
  })
})
