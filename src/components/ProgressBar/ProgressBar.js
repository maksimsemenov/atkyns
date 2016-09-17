import React, { PropTypes } from 'react'
import './ProgressBar.less'

const ProgressBar = ({ progress = 0 }) => (
  <div className='progressBar'>
    <div className='progressBar__complete' style={{ width: `${progress}%`}} />
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number
}

export default ProgressBar
