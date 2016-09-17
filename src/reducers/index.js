import { fromJS } from 'immutable'
import cases, * as fromCases from 'reducers/cases'

export const combineReducers = (reducers) => (state = fromJS({}), action = {}) => (
  Object.keys(reducers).reduce((s, r) => (
    s.set(r, reducers[r](state.get(r), action))
  ), state)
)

const rootReducer = combineReducers({ cases })

export default rootReducer

/*
 * Selectors
 */

 export const getCaseStage = (state = fromJS({}), caseId) => fromCases.getCaseStage(state.get('cases'), caseId)
 export const getCaseProgress = (state = fromJS({}), caseId) => fromCases.getCaseProgress(state.get('cases'), caseId)
 export const getCasePaymentStatuse = (state = fromJS({}), caseId) => fromCases.getCasePaymentStatuse(state.get('cases'), caseId)
 export const getCaseData = (state = fromJS({}), caseId) => fromCases.getCaseData(state.get('cases'), caseId)
 export const getCaseDataField = (state = fromJS({}), caseId, fieldName) => fromCases.getCaseDataField(state.get('cases'), caseId, fieldName)
 export const getCaseDataFields = (state = fromJS({}), caseId, fields) => fromCases.getCaseDataFields(state.get('cases'), caseId, fields)
 export const getCasesList = (state = fromJS({})) => fromCases.getCasesList(state.get('cases'))
