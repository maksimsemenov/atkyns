import React, { PropTypes } from 'react'
import l from 'utils/local'
import './Selectbox.less'

const Selectbox = ({ options, value = '', placeholder, onChange, error, note, ...rest }) =>
  <div className='selectbox__control'>
    <select
      className={`selectbox${value ? ' has-value' : ''}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    >
      {placeholder && <option value=''>{placeholder}</option>}
      {options.map((option, index) =>
        <option
          key={index}
          value={option.value}
          disabled={option.disabled}
        >{option.name}</option>
      )}
    </select>
    {error ? <div className='selectbox__error'>{l(error)}</div> : null}
    {!error && note && <div className='selectbox__note'>{l(note)}</div>}
  </div>

Selectbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  note: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Selectbox
