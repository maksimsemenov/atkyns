import React, { PropTypes } from 'react'
import classNames from 'classnames'
import l from 'utils/local'
import './Selector.less'

const Selector = ({ options = [], active = '', onChange }) => {
  const activeOptions = options.filter(option => !option.disabled)
  active = activeOptions.includes(active) ? active : activeOptions[0]
  return (
    <ul className='selector'>
      {options.map((option, index) => {
        const optionClasses = classNames({
          'selector__option': true,
          'is-active': option.name === active,
          'is-disabled': options.disabled
        })
        return (
          <li
            key={index}
            className={optionClasses}
            onClick={() => onChange(option)}
          >
            {l(`%${option.value}`)}
          </li>
        )
      })}
    </ul>
  )
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  active: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Selector
