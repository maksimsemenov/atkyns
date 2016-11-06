import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Stage from 'components/Stage/Stage'
import FormNav from 'components/Form/FormNav/FormNav'
// import { getCaseProgress } from 'reducers'
import { stages } from 'constants/stages'
import './Form.less'



const Form = ({ progress = 0, params }) => {
  const { caseId, stage } = params
  return (
    <div className='form'>
      <FormNav stages={stages} caseId={caseId} stage={stage} />
      <div className='form__stage'>
        <Stage caseId={caseId} stage={stage} />
      </div>
    </div>
  )
}

Form.propTypes = {
  progress: PropTypes.number,
  params: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  // progress: getCaseProgress(state, ownProps.params.caseId)
})


export default connect(mapStateToProps)(Form)
