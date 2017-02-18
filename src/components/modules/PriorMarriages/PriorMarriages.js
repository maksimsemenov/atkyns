// @flow
import React, { PropTypes as t } from 'react'
import { connect } from 'react-redux'
import PreviousMarriage from 'components/modules/PriorMarriage/PriorMarriage'
import { updateData, deleteData } from 'reducers/cases'
import { getCaseDataField } from 'reducers'
import { getMarriagesForPerson } from 'reducers/case'
import uniqueKey from 'utils/uniqueKey'


const PriorMarriages = ({ marriages, addMarriage, deleteMarriage, caseId, personId }) => {
  if (!marriages.length) {
    addMarriage()
    return null
  }
  const allowRemove = marriages.length > 1
  const allowAdd = marriages.length < 2
  return (
    <div className='fields-group'>
      {marriages.map(({ id, spouses }) =>
        <div key={id} className='fields-group__item'>
          <PreviousMarriage caseId={caseId} marriageId={id} spouseId={spouses[1]}/>
          {allowAdd && <div className='button--round' onClick={addMarriage}>add</div>}
          {allowRemove &&
            <div
              className='button--round'
              onClick={() => deleteMarriage(id, spouses[1])}
            >remove</div>
          }
        </div>
      )}
    </div>
  )
}

PriorMarriages.propTypes = {
  marriages: t.arrayOf(t.shape({
    id: t.string,
    spouse: t.arrayOf(t.string)
  })),
  caseId: t.string,
  addMarriage: t.func.isRequired,
  deleteMarriage: t.func.isRequired
}

const mapStateToProps = (state, { caseId }) => ({
  marriages: getMarriagesForPerson(
    state,
    caseId,
    getCaseDataField(state, caseId, 'case.petitioner')
  )
  .filter(m => !m.get('current'))
  .toList()
  .toJS()
})

const mapDispatchToProps = (dispatch, { caseId, personId }) => ({
  addMarriage: () => {
    const newMarId = uniqueKey()
    const newSpouseId = uniqueKey()
    dispatch(updateData(caseId, [{
      path: `marriages.${newMarId}`,
      value: { id: newMarId, spouses: [personId, newSpouseId] }
    }, {
      path: `persons.${newSpouseId}`,
      value: { id: newSpouseId }
    }]))
  },
  deleteMarriage: (marriageId, personId) => {
    dispatch(deleteData(caseId, [`marriages.${marriageId}`, `persons.${personId}`]))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PriorMarriages)
