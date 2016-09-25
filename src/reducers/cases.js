import { fromJS } from 'immutable'
import capitalize from 'lodash/capitalize'
import trim from 'lodash/trim'
import l from 'utils/local'
import caseReducer, * as fromCase from './case'
import * as DFN from 'constants/dataFieldNames'
import { CHANGE_FIELD, ADD_CASE, SET_STAGE, SET_PAYMENT, DELETE_CASE, RESTORE_CASE } from 'constants/actionTypes'
import { PAYMENT_FULL } from 'constants/paymentStatuses'

const testInitialState = {
  '415rd1wei6o': {
    stage: 0,
    payments: PAYMENT_FULL,
    data: {
      [DFN.P_FIRST_NAME]: {
        value: 'Andy'
      },
      [DFN.P_FAMILY_NAME]: {
        value: 'Smith'
      },
      [DFN.R_FIRST_NAME]: {
        value: 'Veronica'
      },
      [DFN.R_FAMILY_NAME]: {
        value: 'Landau'
      },
      [DFN.P_GENDER]: {
        value: ''
      },
      [DFN.P_CITY]: {
        value: ''
      }
    }
  }
}

const cases = (state = fromJS({}), action) => {
  switch (action.type) {
    case ADD_CASE:
      return state.set(action.caseId, caseReducer(undefined, action))
    case CHANGE_FIELD:
    case SET_STAGE:
    case SET_PAYMENT:
      const { caseId } = action
      return state.set(caseId, caseReducer(state.get(caseId, fromJS({})), action))
    case DELETE_CASE:
      return state.setIn([action.caseId, 'deleted'], true)
    case RESTORE_CASE:
      return state.setIn([action.caseId, 'deleted'], false)
    default:
      return state
  }
}

export default cases


/*
 * Selectors
 */

const caseFields = [
  DFN.P_FIRST_NAME,
  DFN.P_FAMILY_NAME,
  DFN.R_FIRST_NAME,
  DFN.R_FAMILY_NAME
]

export const getCaseIdsList = (state = fromJS({})) => state.keySeq().toJS()
export const getCasesNumber = (state = fromJS({})) => state.size
export const getCaseStage = (state = fromJS({}), caseId) => fromCase.getStage(state.get(caseId))
export const getCaseProgress = (state = fromJS({}), caseId) => fromCase.getProgress(state.get(caseId))
export const getCasePaymentStatuse = (state = fromJS({}), caseId) => fromCase.getPaymentStatuse(state.get(caseId))
export const getCaseData = (state = fromJS({}), caseId) => fromCase.getData(state.get(caseId))
export const getCaseDataField = (state = fromJS({}), caseId, fieldName) => fromCase.getDataField(state.get(caseId), fieldName)
export const getCaseDataFields = (state = fromJS({}), caseId, fields) => fromCase.getDataFields(state.get(caseId), fields)

export const getCasesList = (state = fromJS({})) => {
  return getCaseIdsList(state).map((caseId, index) => {
    const caseData = getCaseDataFields(state, caseId, caseFields)
    const pName = caseData[DFN.P_FIRST_NAME] || caseData[DFN.P_FAMILY_NAME] ?
      trim(`${capitalize(caseData[DFN.P_FIRST_NAME])} ${capitalize(caseData[DFN.P_FAMILY_NAME])}`) :
      `${l('%case')} ${index + 1}`
    const rName = trim(`${capitalize(caseData[DFN.R_FIRST_NAME])} ${capitalize(caseData[DFN.R_FAMILY_NAME])}`)

    return {
      id: caseId,
      pName: pName,
      rName: rName,
      stage: getCaseStage(state, caseId),
      progress: getCaseProgress(state, caseId),
  }})
}
