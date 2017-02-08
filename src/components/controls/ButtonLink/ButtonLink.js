import React, { PropTypes } from 'react'
import Link from 'react-router-dom/Link'
import './ButtonLink.less'

const ButtonLink = ({ children, disabled, ...rest }) => (
  <Link className={`button${disabled ? ' is-disabled' : ''}`} {...rest}>
    {children}
  </Link>
)

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default ButtonLink
