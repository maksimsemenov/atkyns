import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router/BrowserRouter'
import NewCase from 'components/NewCase/NewCase'

describe('NewCase component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const onClick = () => 1
    ReactDOM.render(<BrowserRouter><NewCase onClick={onClick} /></BrowserRouter>, div)
  })
})
