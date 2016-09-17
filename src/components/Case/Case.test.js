import React from 'react'
import ReactDOM from 'react-dom'
import Case from 'components/Case/Case'

describe('Case component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const linkOptions = {
      isActive: () => false
    }
    ReactDOM.render(<Case id='dsdsa' name='Case 0' linkOptions={linkOptions} />, div)
  })
})
