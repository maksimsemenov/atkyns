/* @flow */
import type { ActionT } from 'types/ActionT'

import { fromJS, List, Map } from 'immutable'
// import values from 'lodash/values'
import { actionTypes } from 'reducers/cases'
import { STAGE_OVERVIEW } from 'constants/stages'
import { PAYMENT_NONE } from 'constants/paymentStatuses'
// import * as DFN from 'constants/dataFieldNames'
//
// export const initialData = (fields: string[]) => (
//   fields.reduce((newData, fieldName) => {
//     newData[fieldName] = { value: '', disable: false }
//     return newData
//   }, {})
// )
export const initialState = () => fromJS({
  stage: STAGE_OVERVIEW,
  payment: PAYMENT_NONE,
  data: {}
})

const caseReducer = (state: Map<string, any> = initialState(), action: ActionT) => {
  switch (action.type) {
    case actionTypes.CHANGE_FIELD:
      const { fieldName = '', value } = action
      const path = fieldName.split('.')
      return state.setIn(['data', ...path], value)
    case actionTypes.SET_STAGE:
      return state.set('stage', action.newStage || STAGE_OVERVIEW)
    case actionTypes.SET_PAYMENT:
      return state.set('payment', action.newPaymentStatuse || PAYMENT_NONE)
    case actionTypes.DELETE_CASE:
      return state.set('deleted', true)
    case actionTypes.RESTORE_CASE:
      return state.set('deleted', false)
    case actionTypes.SET_FIELD_ERROR:
      return state.setIn(['errors', action.fieldName], action.error)
    case actionTypes.REMOVE_FIELD_ERROR:
      return state.deleteIn(['errors', action.fieldName])
    default:
      return state
  }
}

export default caseReducer

/*
 * Selectors
 */

export const getStage = (state: Map<string, any> = fromJS({})) => state.get('stage', 0)
export const getPaymentStatuse = (state: Map<string, any> = fromJS({})) => state.get('payment', PAYMENT_NONE)
export const getData = (state: Map<string, any> = fromJS({})) => state.get('data', fromJS({})).toJS()
export const getDataField = (state: Map<string, any> = fromJS({}), fieldName: string = '') => {
  const path = fieldName.split('.')
  const field = state.getIn(['data', ...path], '')
  return List.isList(field) || Map.isMap(field) ?
    field.toJS() :
    field
}
export const getDataFields = (state: Map<string, any> = fromJS({}), fields: string[] = []) => (
  fields.reduce((fMap, fieldName) => {
    fMap[fieldName] = getDataField(state, fieldName)
    return fMap
  }, {})
)
export const getDataFieldError = (
  state: Map<string, any> = fromJS({}),
  fieldName: string = ''
) => state.getIn(['errors', fieldName])
