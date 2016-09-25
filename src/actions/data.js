/* @flow */

import type { DataFieldPatchT, DataFieldEffectT } from '../types/DataFieldT'

import * as actionTypes from 'constants/actionTypes'

const changeDataField = (caseId: string, fieldName: string, dataPatch: DataFieldPatchT) => (
  { type: actionTypes.CHANGE_FIELD, caseId, fieldName, dataPatch }
)

export const changeDataFieldThunk = (
  caseId: string,
  fieldName: string,
  dataPatch: DataFieldPatchT,
  effects: DataFieldEffectT[]) => (dispatch) => {
  dispatch(changeDataField(caseId, fieldName, dataPatch))
  if (effects) {
    effects.forEach((ef) => dispatch(changeDataField(caseId, ef.fieldName, ef.effect(dataPatch))))
  }
}

export const addCase = (caseId: string) => ({ type: actionTypes.ADD_CASE, caseId })
export const deleteCase = (caseId: string) => ({ type: actionTypes.DELETE_CASE, caseId })
export const restoreCase = (caseId: string) => ({ type: actionTypes.RESTORE_CASE, caseId })

export const setStage = (caseId: string, newStage: string) => ({ type: actionTypes.SET_STAGE, caseId, newStage })
export const setPayment = (caseId: string, newPaymentStatuse: string) => ({ type: actionTypes.SET_PAYMENT, caseId, newPaymentStatuse })
