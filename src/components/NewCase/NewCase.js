import React, { PropTypes } from 'react'
import Link from 'react-router/Link'
import uniqueKey from 'utils/uniqueKey'
import l from 'utils/local'
import './NewCase.less'

const NewCase = ({ onClick, ...rest }) => {
  const newId = uniqueKey()
  return (
    <Link
      to={`/case-${newId}`}
      onClick={() => onClick(newId)}
      className='newCase'
      {...rest}
    >
      <svg className='newCase__plus' viewBox='0 0 101 101'>
        <rect x='20' y='50' width='60' height='1' />
        <rect x='50' y='20' width='1' height='60' />
      </svg>
      <div className='newCase__label'>{l('%createCase')}</div>
    </Link>
  )
}

NewCase.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewCase
