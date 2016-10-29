import React, { PropTypes } from 'react'
import Autocomplete from 'react-autocomplete'
import './Textfield.less'


// Standart helper functions for autocomplete
export const renderMenu = (items, value, style) =>
  items ?
  <ul className='textfield-ac' children={items} style={style} /> :
  null

export const renderItem = (item, isHighlighted) =>
  <li
    key={item.value}
    className={`textfield-acItem${isHighlighted ? 'is-highlighted' : ''}`}
  >{item.name}</li>

export const getItemValue = item => item.name
export const shouldItemRender = (item, value) =>
  item.value.toLowerCase().search(value.toLowerCase()) !== -1

const defaultAC = {
  renderItem,
  renderMenu,
  getItemValue,
  shouldItemRender
}

// Textfield component itself
const Textfield = ({
  value,
  mask,
  wrapperStyle,
  appearance,
  autocomplete,
  onChange,
  error,
  note,
  ...rest
}) => {
  const maskedValue = mask ? mask(value) : value
  const ac = autocomplete ? {...defaultAC, ...autocomplete } : undefined
  const inputProps = {
    className: `textfield${error ? ' has-error' : ''}`,
    ...rest
  }
  return (
    <div className='textfield__control' style={wrapperStyle}>
      {ac ? (
        <Autocomplete
          value={maskedValue}
          onSelect={onChange}
          onChange={(event, value) => onChange(value)}
          inputProps={inputProps}
          {...ac}
        />
      ) : (
        <input value={maskedValue} onChange={onChange} {...inputProps} />
      )}
      {error && <div className='ob-textfield-error'>{error}</div>}
      {!error && note && <div className='ob-textfield-note'>{note}</div>}
    </div>
  )
}

Textfield.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'url', 'date', 'number']),
  wrapperStyle: PropTypes.object,
  autocomplete: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    shouldItemRender: PropTypes.func
  }),
  mask: PropTypes.func,
  onChange: PropTypes.func.isRequired,

  appearance: PropTypes.oneOf(['default', 'inGroup']),
}
Textfield.defaultProps = {
  type: 'text',
}

export default Textfield
