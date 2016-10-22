/* @flow */
import type { ActionT } from 'types/ActionT'

import { fromJS } from 'immutable'
import values from 'lodash/values'
import { CHANGE_FIELD, SET_STAGE, SET_PAYMENT, DELETE_CASE, RESTORE_CASE } from 'constants/actionTypes'
import { STAGE_OVERVIEW } from 'constants/stages'
import { PAYMENT_NONE } from 'constants/paymentStatuses'
import * as DFN from 'constants/dataFieldNames'

export const initialData = (fields: string[]) => (
  fields.reduce((newData, fieldName) => {
    newData[fieldName] = { value: '', disable: false }
    return newData
  }, {})
)
export const initialState = (fieldMap) => fromJS({
  stage: STAGE_OVERVIEW,
  payment: PAYMENT_NONE,
  data: initialData(values(fieldMap))
})

const caseReducer = (state: Map<string, any> = initialState(DFN), action: ActionT) => {
  switch (action.type) {
    case CHANGE_FIELD:
      const { fieldName = '', dataPatch } = action
      const path = fieldName.split('/')
      return state.setIn(['data', ...path], dataPatch)
    case SET_STAGE:
      return state.set('stage', action.newStage || STAGE_OVERVIEW)
    case SET_PAYMENT:
      return state.set('payment', action.newPaymentStatuse || PAYMENT_NONE)
    case DELETE_CASE:
      return state.set('deleted', true)
    case RESTORE_CASE:
      return state.set('deleted', false)
    default:
      return state
  }
}

export default caseReducer

/*
 * Selectors
 */

export const getStage = (state: Map<string, any> = fromJS({})) => state.get('stage', 0)
export const getProgress = (state: Map<string, any> = fromJS({})) => {
  const mandatoryFields = state.get('data', fromJS({})).filter(field => !field.get('disable')).size
  const completedFields = state.get('data', fromJS({})).filter(field => field.get('value') && field.get('value') !== '').size
  return Math.floor((completedFields / mandatoryFields) * 100) || 0
}
export const getPaymentStatuse = (state: Map<string, any> = fromJS({})) => state.get('payment', PAYMENT_NONE)
export const getData = (state: Map<string, any> = fromJS({})) => state.get('data', fromJS({})).toJS()
export const getDataField = (state: Map<string, any> = fromJS({}), fieldName: string = '') => {
  const path = fieldName.split('/')
  return state.getIn(['data', ...path], '')
}
export const getDataFields = (state: Map<string, any> = fromJS({}), fields: string[] = []) => (
  fields.reduce((fMap, fieldName) => {
    fMap[fieldName] = getDataField(state, fieldName)
    return fMap
  }, {})
)
