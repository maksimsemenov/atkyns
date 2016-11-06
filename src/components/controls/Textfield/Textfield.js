import React, { Component, PropTypes } from 'react'
import Autocomplete from 'react-autocomplete'
import Datefield from './Datefield'
import l from 'utils/local'
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



/*
 * Textfield component itself
 */

const Textfield = ({
  value,
  transformIn = (value) => value,
  transformOut = (value) => value,
  wrapperStyle,
  appearance,
  autocomplete,
  onChange,
  onBlur = () => {},
  onFocus = () => {},
  error,
  note,
  ...rest
}) => {
  let ac = autocomplete ? {...defaultAC, ...autocomplete } : undefined
  let inputProps = {
    className: `textfield${error ? ' has-error' : ''}`,
    ...rest
  }
  return (
    <div className='textfield__control' style={wrapperStyle}>
      {ac ? (
        <Autocomplete
          value={transformIn(value)}
          onSelect={(value) => onChange(transformOut(value))}
          onChange={(event, value) => onChange(transformOut(value))}
          inputProps={inputProps}
          wrapperStyle={{ display: 'block' }}
          {...ac}
        />
        ) : (
        <input
          value={transformIn(value)}
          onChange={(e) => onChange(transformOut(e.target.value))}
          onBlur={(e) => onBlur(transformOut(e.target.value))}
          onFocus={(e) => onFocus(transformOut(e.target.value))}
          {...inputProps}
        />
      )}
      {error ? <div className='textfield__error'>{l(error)}</div> : null}
      {!error && note && <div className='textfield__note'>{l(note)}</div>}
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
  transformIn: PropTypes.func,
  transformOut: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  appearance: PropTypes.oneOf(['default', 'inGroup']),
}
Textfield.defaultProps = {
  type: 'text',
  onFocus: () => {},
  onBlur: () => {}
}

export default Textfield
