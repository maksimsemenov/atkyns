import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './ProgressBar.less'

const ProgressBar = ({ progress = 0, appearance = 'default' }) => {
  const progressClasses = classNames({
    'progressBar': true,
    [`progressBar--${appearance}`]: true
  })
  return (
    <div className={progressClasses}>
      <div className='progressBar__complete' style={{ width: `${progress}%`}} />
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  appearance: PropTypes.oneOf(['default', 'case', 'form'])
}

export default ProgressBar
