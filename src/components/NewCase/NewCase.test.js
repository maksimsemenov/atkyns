import React from 'react'
import ReactDOM from 'react-dom'
import NewCase from 'components/NewCase/NewCase'

describe('NewCase component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const onClick = () => 1
    ReactDOM.render(<NewCase onClick={onClick} isActive={() => false} />, div)
  })
})
