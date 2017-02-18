/* @flow */
import type { ActionT, DataPatchT } from 'types/ActionT'
import type { DataFieldPatchT, DataFieldEffectT } from 'types/DataFieldT'

import { fromJS } from 'immutable'
import capitalize from 'lodash/capitalize'
import trim from 'lodash/trim'
import l from 'utils/local'
import caseReducer, * as fromCase from './case'
import * as DFN from 'constants/dataFieldNames'

/*
 * Action types
 */
export const UPDATE_DATA = 'UPDATE_DATA'
export const DELETE_DATA = 'DELETE_DATA'
export const SET_FIELD_ERROR = 'SET_FIELD_ERROR'
export const REMOVE_FIELD_ERROR = 'REMOVE_FIELD_ERROR'

export const ADD_CASE = 'ADD_CASE'
export const DELETE_CASE = 'DELETE_CASE'
export const RESTORE_CASE = 'RESTORE_CASE'

export const SET_STAGE = 'SET_STAGE'
export const SET_PAYMENT = 'SET_PAYMENT'

export const actionTypes = {
  UPDATE_DATA,
  DELETE_DATA,
  SET_FIELD_ERROR,
  REMOVE_FIELD_ERROR,
  ADD_CASE,
  DELETE_CASE,
  RESTORE_CASE,
  SET_STAGE,
  SET_PAYMENT
}

/*
 * Reducer
 */

const cases = (state: Map<string, any> = fromJS({}), action: ActionT) => {
  switch (action.type) {
    case ADD_CASE:
      return state.set(action.caseId, caseReducer(undefined, action))
    case UPDATE_DATA:
    case DELETE_DATA:
    case SET_STAGE:
    case SET_PAYMENT:
    case DELETE_CASE:
    case RESTORE_CASE:
    case SET_FIELD_ERROR:
    case REMOVE_FIELD_ERROR:
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
export const getCasePaymentStatuse = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getPaymentStatuse(state.get(caseId))
export const getCaseData = (state: Map<string, any> = fromJS({}), caseId: string) => fromCase.getData(state.get(caseId))

export const getCaseDataField = (
  state: Map<string, any> = fromJS({}),
  caseId: string,
  fieldName: string
) => fromCase.getDataField(state.get(caseId), fieldName)

export const getCaseDataFields = (
  state: Map<string, any> = fromJS({}),
  caseId: string,
  fields: string[]
) => fromCase.getDataFields(state.get(caseId), fields)

export const getCaseDataFieldError = (
  state: Map<string, any> = fromJS({}),
  caseId: string, fieldName: string
) => fromCase.getDataFieldError(state.get(caseId), fieldName)

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

/*
 * Actions
 */

export const updateData = (caseId: string, patch: Array<DataPatchT> | DataPatchT): ActionT =>
  ({ type: UPDATE_DATA, caseId, patch })
export const deleteData = (caseId: string, path: Array<string> | string): ActionT =>
  ({ type: DELETE_DATA, caseId, path })


const setFieldError = (caseId: string, fieldName: string, error: string) =>
  ({ type: SET_FIELD_ERROR, caseId, fieldName, error })

const removeFieldError = (caseId: string, fieldName: string) =>
 ({ type: REMOVE_FIELD_ERROR, caseId, fieldName })
const addCase = (caseId: string) => ({ type: ADD_CASE, caseId })
const deleteCase = (caseId: string) => ({ type: DELETE_CASE, caseId })
const restoreCase = (caseId: string) => ({ type: RESTORE_CASE, caseId })

const setStage = (caseId: string, newStage: string) => ({ type: SET_STAGE, caseId, newStage })
const setPayment = (caseId: string, newPaymentStatuse: string) => ({ type: SET_PAYMENT, caseId, newPaymentStatuse })

export const actions = {
  updateData,
  deleteData,
  setFieldError,
  removeFieldError,
  addCase,
  deleteCase,
  restoreCase,
  setStage,
  setPayment
}
