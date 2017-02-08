import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Case from 'components/Cases/Case/Case'
import NewCase from 'components/Cases/NewCase/NewCase'
import EmptyCases from 'components/EmptyCases/EmptyCases'
import { getCasesList } from 'reducers'
import { actions } from 'reducers/cases'

import './Cases.less'

const Cases = ({ cases = [], deleted = false, onAddCase, ...rest }) => {
  const empty = cases.length === 0
  return (
    <div className='cases'>
      <NewCase onClick={onAddCase} isListEmpty={empty} />
      {!empty ?
        <div className='cases__list'>
          {cases.map(caseData => (
            <Case
              {...caseData}
              {...rest}
              key={caseData.id}
            />
          ))}
        </div>
        :
       <EmptyCases />
      }
    </div>
)}

Cases.propTypes = {
  deleted: PropTypes.bool,
  cases: PropTypes.array,
  onAddCase: PropTypes.func.isRequired,
  onCaseDelete: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  cases: getCasesList(state)
})
const mapDispatchToProps = (dispatch) => ({
  onAddCase: (newId) => dispatch(actions.addCase(newId)),
  onCaseDelete: (caseId) => {
    dispatch(actions.deleteCase(caseId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cases)
