import React, { Component, PropTypes } from 'react'

class Textfield extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  handleChange(e) {

  }
  render() {
    return (
      <input
        type='text' />
    )
  }
}

Textfield.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['']),
  appearance: PropTypes.oneOf(['default', 'inGroup']),
  length: PropTypes.string,
  autocomplete: PropTypes.func,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
Textfield.defaultProps = {
  type: '',
  length: '200px',
}

export default Textfield
