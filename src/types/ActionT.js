/* @flow */
import type { DataFieldPatchT } from './DataFieldT'

export type ActionT = {
  type?: string,
  caseId?: string,
  fieldName?: string,
  dataPatch?: DataFieldPatchT
}
