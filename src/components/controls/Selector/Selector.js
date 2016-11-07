import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './Selector.less'

const Selector = ({ options = [], value = '', onChange, error, note, className }) => {
  const selectorClasses = classNames({
    'selector': true,
    'has-value': value,
    'has-error': error,
    [className]: className
  })
  return (
    <div className='selector__container'>
      <ul className={selectorClasses}>
        {options.map((option, index) => {
          const optionClasses = classNames({
            'selector__option': true,
            'is-active': option.value === value,
            'is-disabled': options.disabled
          })
          return (
            <li
              key={index}
              className={optionClasses}
              onClick={() => onChange(option.value)}
            >
              {option.name}
            </li>
          )
        })}
      </ul>
      {error ? <div className='selector__error'>{error}</div> : null}
      {!error && note && <div className='selector__note'>{note}</div>}
    </div>
  )
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  note: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Selector
