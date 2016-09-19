import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from 'components/ProgressCircle/ProgressCircle'

describe('Home component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProgressBar />, div)
  })
})
