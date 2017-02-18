/* @flow */
export type DataPatchT = { path: string, value: any }

export type ActionT = {
  type: string,
  caseId?: string,
  path?: string[] | string,
  patch?: DataPatchT[] | DataPatchT,
  value?: any,
  error?: string
}
