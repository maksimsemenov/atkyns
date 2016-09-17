import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Case from 'components/Case/Case'
import NewCase from 'components/NewCase/NewCase'
import { getCasesList } from 'reducers'
import { addCase } from 'actions/data'

import './Cases.less'

const Cases = ({ cases = [], onAddCase }) => (
  <div className='cases'>
    <NewCase onClick={onAddCase} />
    {cases.map(caseData => (
      <Case
        {...caseData}
        key={caseData.id}
      />
    ))}
  </div>
)

Cases.propTypes = {
  cases: PropTypes.array,
  onAddCase: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  cases: getCasesList(state)
})
const mapDispatchToProps = (dispatch) => ({
  onAddCase: (newId) => dispatch(addCase(newId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cases)
