import React, { PropTypes } from 'react'
import './Form.less'

const Form = ({ params }) => (
  <div className='form'>
    {params.caseId}
  </div>
)

Form.propTypes = {

}

export default Form
