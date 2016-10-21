import React from 'react'
import ReactDOM from 'react-dom'
import CaseDelete from 'components/Case/CaseDelete'

describe('CaseDelete component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CaseDelete onClick={() => {}} />, div)
  })
})
