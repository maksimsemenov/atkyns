/* @flow */
import type { ActionT } from 'types/ActionT'

import { fromJS } from 'immutable'
import cases, * as fromCases from 'reducers/cases'

export const combineReducers = (reducers: any) =>
  (state: Map<string, any> = fromJS({}), action: ActionT) => (
    Object.keys(reducers).reduce((s, r) => (
      s.set(r, reducers[r](state.get(r), action))
    ), state)
)

const rootReducer = combineReducers({ cases })

export default rootReducer

/*
 * Selectors
 */

export const getCasesNumber = (state: Map<string, any> = fromJS({})) =>
  fromCases.getCasesNumber(state.get('cases'))

export const getActiveCasesNumber = (state: Map<string, any> = fromJS({})) =>
  fromCases.getActiveCasesNumber(state.get('cases'))

export const getDeletedCasesNumber = (state: Map<string, any> = fromJS({})) =>
  fromCases.getDeletedCasesNumber(state.get('cases'))

export const getCaseStage = (state: Map<string, any> = fromJS({}), caseId: string) =>
  fromCases.getCaseStage(state.get('cases'), caseId)

export const getCasePaymentStatuse = (state: Map<string, any> = fromJS({}), caseId: string) =>
  fromCases.getCasePaymentStatuse(state.get('cases'), caseId)

export const getCaseData = (state: Map<string, any> = fromJS({}), caseId: string) =>
  fromCases.getCaseData(state.get('cases'), caseId)

export const getCaseDataField = (state: Map<string, any> = fromJS({}), caseId: string, path: string): any =>
  fromCases.getCaseDataField(state.get('cases'), caseId, path)

export const getCaseDataFieldError = (
  state: Map<string, any> = fromJS({}),
  caseId: string,
  fieldName: string
) => fromCases.getCaseDataFieldError(state.get('cases'), caseId, fieldName)

export const getCaseDataFields = (state: Map<string, any> = fromJS({}), caseId: string, fields: string[]) =>
  fromCases.getCaseDataFields(state.get('cases'), caseId, fields)

export const getCasesList = (state: Map<string, any> = fromJS({}), deleted: boolean = false) =>
  fromCases.getCasesList(state.get('cases'), deleted)
