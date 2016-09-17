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
      {...rest}
    >
      <div className='newCase'>
        <div className='newCase__label'>{l('%createCase')}</div>
      </div>
    </Link>
  )
}

NewCase.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewCase
