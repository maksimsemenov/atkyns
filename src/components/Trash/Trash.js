import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import { getCasesList } from 'reducers'
import { actions } from 'reducers/cases'
import l from 'utils/local'
import './Trash.less'

const Trash = ({ cases = [], onCaseRestore }) => (
  <div className='trash'>
    <h2 className='trash__title'>{l('%trashTitle')}</h2>
    <Link to='/' className='trash__close' isActive={() => false} />
    <ul className='trash__cases'>
      {cases.map(c => (
        <li key={c.id} className='trash__case'>
          <div className='trash__caseTitle'>{`${c.pName}${c.rName ? ` – ${c.rName}` : ''}`}</div>
          <button className='trash__caseRestore' onClick={() => onCaseRestore(c.id)}>{l('%restoreCase')}</button>
        </li>
      ))}
    </ul>
  </div>
)

Trash.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pName: PropTypes.string.isRequired,
    rName: PropTypes.string
  })),
  onCaseRestore: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  cases: getCasesList(state, true)
})
const mapDispatchToProps = (dispatch) => ({
  onCaseRestore: (caseId) => dispatch(actions.restoreCase(caseId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Trash)
