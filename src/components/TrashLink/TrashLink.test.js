import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import TrashLink from 'components/TrashLink/TrashLink'

describe('TrashLink component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><TrashLink /></BrowserRouter>, div)
  })
})
