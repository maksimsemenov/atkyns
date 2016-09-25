import React, { PropTypes } from 'react'
import Link from 'react-router/Link'
import uniqueKey from 'utils/uniqueKey'
import l from 'utils/local'
import './NewCase.less'

const NewCase = ({ onClick, isListEmpty = false, ...rest }) => {
  const newId = uniqueKey()
  return (
    <Link
      to={`/case-${newId}`}
      onClick={() => onClick(newId)}
      className={`newCase${isListEmpty ? ' newCase--emptyList' : ''}`}
      {...rest}
    >
      <div className='newCase__frame'>
        <svg className='newCase__plus' viewBox='0 0 100 100'>
          <rect x='0' y='49' width='100' height='2' />
          <rect x='49' y='0' width='2' height='100' />
        </svg>
      </div>
      <div className='newCase__label'>{l('%createCase')}</div>
    </Link>
  )
}

NewCase.propTypes = {
  onClick: PropTypes.func.isRequired,
  isListEmpty: PropTypes.bool
}

export default NewCase
