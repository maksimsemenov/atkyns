// @flow

type DataFieldTypeT =
  | 'option'
  | 'text'
  | 'date'
  | 'number'
  | 'boolean'

type DataFieldOptionT = {
  value: string,
}
export type DataFieldPatchT = ?string | number | boolean

export type DataFieldEffectT = {
  fieldName: string,
  effect: (newProps: DataFieldPatchT) => DataFieldPatchT
}

export type DataFieldT = {
  name: string,
  value: ?string | ?number,
  type: DataFieldTypeT,
  disable: boolean,
  options?: DataFieldOptionT[],
  effects?: DataFieldEffectT[]
}
