/* @flow */
export type DataItemT = ?string | number | boolean
export type DataPatchT = { patch: string, value: DataPatchT }

export type ActionT = {
  type: string,
  caseId?: string,
  path?: string[] | string,
  patch?: DataPatchT[] | DataPatchT,
  value?: DataItemT,
  error?: string
}
