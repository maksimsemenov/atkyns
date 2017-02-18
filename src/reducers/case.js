/* @flow */
import type { ActionT } from 'types/ActionT'

import { fromJS, List, Map } from 'immutable'
// import values from 'lodash/values'
import { actionTypes } from 'reducers/cases'
import { STAGE_OVERVIEW } from 'constants/stages'
import { PAYMENT_NONE } from 'constants/paymentStatuses'
import uniqueKey from 'utils/uniqueKey'
// import * as DFN from 'constants/dataFieldNames'
//
// export const initialData = (fields: string[]) => (
//   fields.reduce((newData, fieldName) => {
//     newData[fieldName] = { value: '', disable: false }
//     return newData
//   }, {})
// )
export const initialState = () => {
  const petitionerId = uniqueKey()
  const relativeId = uniqueKey()
  const marriageId = uniqueKey()
  return fromJS({
    stage: STAGE_OVERVIEW,
    payment: PAYMENT_NONE,
    data: {
      case: {
        petitioner: petitionerId,
        relative: relativeId,
        relation: 'spouse'
      },
      marriages: {
        [marriageId]: {
          id: marriageId,
          spouses: [petitionerId, relativeId],
          current: true
        }
      },
      persons: {
        [petitionerId]: {
          id: petitionerId,
          maritalStatus: 'married',
        },
        [relativeId]: {
          id: relativeId,
          maritalStatus: 'married'
        }
      }
    }
  })
}

const updateData = (state, { patch = [] }) => {
  if (Array.isArray(patch)) {
    return state.withMutations(mState => {
      patch.forEach(p => mState.setIn(['data', ...p.path.split('.')], fromJS(p.value)))
      return mState
    })
  }
  return state.setIn(['data', ...patch.path.split('.')], fromJS(patch.value))
}

const deleteData = (state, { path = [] }) => {
  if (Array.isArray(path)) {
    return state.withMutations(mState => {
      path.forEach(p => mState.deleteIn(['data', ...p.split('.')]))
      return mState
    })
  }
  return state.deleteIn(['data', ...path.split('.')])
}

const caseReducer = (state: Map<string, any> = initialState(), action: ActionT) => {
  switch (action.type) {
    case actionTypes.UPDATE_DATA:
      return updateData(state, action)
    case actionTypes.DELETE_DATA:
      return deleteData(state, action)
    case actionTypes.SET_STAGE:
      return state.set('stage', action.newStage || STAGE_OVERVIEW)
    case actionTypes.SET_PAYMENT:
      return state.set('payment', action.newPaymentStatuse || PAYMENT_NONE)
    case actionTypes.DELETE_CASE:
      return state.set('deleted', true)
    case actionTypes.RESTORE_CASE:
      return state.set('deleted', false)
    case actionTypes.SET_FIELD_ERROR:
      return state.setIn(['errors', action.path], action.error)
    case actionTypes.REMOVE_FIELD_ERROR:
      return state.deleteIn(['errors', action.path])
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
export const getDataField = (state: Map<string, any> = fromJS({}), path: string = '') => {
  const field = state.getIn(['data', ...path.split('.')], '')
  return List.isList(field) || Map.isMap(field) ? field.toJS() : field
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

export const getMarriagesForPerson = (
  state: Map<string, any> = fromJS({}),
  caseId: string,
  personId: string
): Map<string, any> => state.getIn(['cases', caseId, 'data', 'marriages'], Map())
  .filter(m => m.get('spouses').includes(personId))
