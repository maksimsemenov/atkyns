import React from 'react'
import ReactDOM from 'react-dom'
import EmptyCases from 'components/EmptyCases/EmptyCases'

describe('EmptyCases component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(<EmptyCases />, div)
  })
})
