/* @flow */

import type { DataFieldPatchT, DataFieldEffectT } from '../types/DataFieldT'

import { CHANGE_FIELD, ADD_CASE } from 'constants/actionTypes'

const changeDataField = (caseId: string, fieldName: string, dataPatch: DataFieldPatchT) => (
  { type: CHANGE_FIELD, caseId, fieldName, dataPatch }
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

export const addCase = (caseId: string) => ({ type: ADD_CASE, caseId })
