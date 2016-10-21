import React from 'react'
import ReactDOM from 'react-dom'
import Textfield from 'components/Textfield/Textfield'

describe('Textfield component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const onChange = () => {}
    ReactDOM.render(<Textfield onChange={onChange} />, div)
  })
})
