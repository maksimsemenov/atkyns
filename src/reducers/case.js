import { fromJS } from 'immutable'
import values from 'lodash/values'
import { CHANGE_FIELD, SET_STAGE, SET_PAYMENT } from 'constants/actionTypes'
import { PAYMENT_NONE } from 'constants/paymentStatuses'
import * as DFN from 'constants/dataFieldNames'

export const initialData = (fields) => (
  fields.reduce((newData, fieldName) => {
    newData[fieldName] = { value: '', disable: false }
    return newData
  }, {})
)
export const initialState = (fieldMap) => fromJS({
  stage: 0,
  payment: PAYMENT_NONE,
  data: initialData(values(fieldMap))
})

const caseReducer = (state = initialState(DFN), action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      const { fieldName, dataPatch } = action
      return state.mergeIn(['data', fieldName], dataPatch)
    case SET_STAGE:
      return state.set('stage', action.newStage)
    case SET_PAYMENT:
      return state.set('payment', action.newPaymentStatuse)
    default:
      return state
  }
}

export default caseReducer

/*
 * Selectors
 */

export const getStage = (state = fromJS({})) => state.get('stage', 0)
export const getProgress = (state = fromJS({})) => {
  const mandatoryFields = state.get('data', fromJS({})).filter(field => !field.get('disable')).size
  const completedFields = state.get('data', fromJS({})).filter(field => field.get('value') && field.get('value') !== '').size
  return Math.floor((completedFields / mandatoryFields) * 100) || 0
}
export const getPaymentStatuse = (state = fromJS({})) => state.get('payment', PAYMENT_NONE)
export const getData = (state = fromJS({})) => state.get('data', fromJS({})).toJS()
export const getDataField = (state = fromJS({}), fieldName) => state.getIn(['data', fieldName, 'value'], '')
export const getDataFields = (state = fromJS({}), fields = []) => (
  fields.reduce((fMap, fieldName) => {
    fMap[fieldName] = getDataField(state, fieldName)
    return fMap
  }, {})
)
