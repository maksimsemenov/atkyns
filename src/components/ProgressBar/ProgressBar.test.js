import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from 'components/ProgressBar/ProgressBar'

describe('ProgressBar component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProgressBar />, div)
  })
})
