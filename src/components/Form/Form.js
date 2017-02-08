import React, { PropTypes } from 'react'
import Stage from 'components/Stage/Stage'
import FormNav from 'components/Form/FormNav/FormNav'
import { stages } from 'constants/stages'
import './Form.less'

const Form = ({ progress = 0, match }) => {
  const { caseId, stage } = match.params
  return (
    <div className='form'>
      <FormNav stages={stages} caseId={caseId} stage={stage} />
      <Stage caseId={caseId} stage={stage} />
    </div>
  )
}

Form.propTypes = {
  progress: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      caseId: PropTypes.string,
      stage: PropTypes.string
    })
  })
}

export default Form
