/* @flow */
import type { ActionT } from 'types/ActionT'

import { fromJS } from 'immutable'
import capitalize from 'lodash/capitalize'
import trim from 'lodash/trim'
import l from 'utils/local'
import caseReducer, * as fromCase from './case'
import * as DFN from 'constants/dataFieldNames'
import { CHANGE_FIELD, ADD_CASE, SET_STAGE, SET_PAYMENT, DELETE_CASE, RESTORE_CASE } from 'constants/actionTypes'

const cases = (state: Map<string, any> = fromJS({}), action: ActionT) => {
  switch (action.type) {
    case ADD_CASE:
      return state.set(action.caseId, caseReducer(undefined, action))
    case CHANGE_FIELD:
    case SET_STAGE:
    case SET_PAYMENT:
    case DELETE_CASE:
    case RESTORE_CASE:
      const { caseId = '' } = action
      return state.set(caseId, caseReducer(state.get(caseId, fromJS({})), action))
    default:
      return state
  }
}

export default cases

/*
 * Selectors
 */


export const getCaseIdsList = (state: Map<string, any> = fromJS({})) => state.keySeq().toJS()
export const getActiveCaseIdsList = (state: Map<string, any> = fromJS({})) => state.filter(c => !c.get('deleted')).keySeq().toJS()
export const getDeletedCaseIdsList = (state: Map<string, any> = fromJS({})) => state.filter(c => c.get('deleted')).keySeq().toJS()
export const getCasesNumber = (state: Map<string, any> = fromJS({})) => state.size
export const getActiveCasesNumber = (state: Map<string, any> = fromJS({})) => state.filter(c => !c.get('deleted')).size
export const getDeletedCasesNumber = (state: Map<string, any> = fromJS({})) => state.filter(c => c.get('deleted')).size
export const getCaseStage = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getStage(state.get(caseId))
export const getCaseProgress = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getProgress(state.get(caseId))
export const getCasePaymentStatuse = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getPaymentStatuse(state.get(caseId))
export const getCaseData = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getData(state.get(caseId))
export const getCaseDataField =
  (state: Map<string, any> = fromJS({}), caseId: string, fieldName: string) => fromCase.getDataField(state.get(caseId), fieldName)
export const getCaseDataFields =
  (state: Map<string, any> = fromJS({}), caseId: string, fields: string[]) => fromCase.getDataFields(state.get(caseId), fields)

const caseFields = [
  DFN.P_FIRST_NAME,
  DFN.P_FAMILY_NAME,
  DFN.R_FIRST_NAME,
  DFN.R_FAMILY_NAME
]

export const getCasesList = (state: Map<string, any> = fromJS({}), deleted: boolean = false) => {
  const caseTranformHelper = (state) => (caseId, index) => {
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
    }
  }
  if (deleted) {
    return getDeletedCaseIdsList(state).map(caseTranformHelper(state))
  }
  return getActiveCaseIdsList(state).map(caseTranformHelper(state))
}
