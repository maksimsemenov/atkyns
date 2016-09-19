import React, { PropTypes } from 'react'
import './ProgressCircle.less'

const ProgressCircle = ({ progress = 0, appearance = 'default' }) => {
  const angle = Math.PI * 2 * (progress / 100)
  const x = 6 + Math.sin(angle) * 5
  const y = 6 - Math.cos(angle) * 5

  return (
  <div className={`progressCircle progressCircle--${appearance}`}>
    <svg className='progressCircle__complete' viewBox='0 0 12 12' fill='none'>
      <circle className='progressCircle__circle' cx='6' cy='6' r='5' />
      <path
        className='progressCircle__arc'
        d={`M6 1 A 5 5 0 1 1 ${x} ${y} `}
      />
    </svg>
  </div>
)}

ProgressCircle.propTypes = {
  progress: PropTypes.number,
  appearance: PropTypes.oneOf(['default', 'case'])
}

export default ProgressCircle
