import React, { PropTypes } from 'react'
import l from 'utils/local'
import './Selectbox.less'

const Selectbox = ({ options, active = '', onChange }) => {
  const activeOptions = options.filter(option => !option.disabled)
  active = activeOptions.includes(active) ? active : activeOptions[0]
  return (
    <select
      className='selectbox'
      value={active}
      onChange={(e) => onChange(e.target.options.item(e.target.selectedIndex).value)}
    >
      {options.map((option, index) =>
        <option
          key={index}
          value={option.value}
          disabled={option.disabled}
        >{l(`%${option.value}`)}</option>
      )}
    </select>
  )
}

Selectbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  active: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Selectbox
