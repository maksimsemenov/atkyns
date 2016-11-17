import React, { PropTypes } from 'react'
import Stage from 'components/Stage/Stage'
import FormNav from 'components/Form/FormNav/FormNav'
import { stages } from 'constants/stages'
import './Form.less'

const Form = ({ progress = 0, params }) => {
  const { caseId, stage } = params
  return (
    <div className='form'>
      <FormNav stages={stages} caseId={caseId} stage={stage} />
      <Stage caseId={caseId} stage={stage} />
    </div>
  )
}

Form.propTypes = {
  progress: PropTypes.number,
  params: PropTypes.object
}

export default Form
