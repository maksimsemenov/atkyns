import React, { PropTypes } from 'react'
import Selectbox from 'components/Selectbox/Selectbox'
import Selector from 'components/Selector/Selector'
import Switch from 'components/Switch/Switch'
import Textfield from 'components/Textfield/Textfield'
import * as fieldTypes from 'constants/fieldTypes'

const Control = ({ dataField, appearance = 'block', onChange }) => {
  switch (dataField.type) {
    case fieldTypes.selector:
      const { name, options, effects } = dataField
      return <Selector options={options} />
    default:
      return null
  }
}

Control.propTypes = {
  dataField: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  appearance: PropTypes.oneOf(['block', 'inline']),
  onChange: PropTypes.func.isRequired
}

export default Control
