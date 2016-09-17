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
export type DataFieldPatchT = {
  value?: string | number,
  disable?: boolean,
}
export type DataFieldEffectT = {
  fieldName: string,
  effect: (newProps: DataFieldPatchT) => DataFieldPatchT // eslint-disable-line no-use-before-define
}

export type DataFieldT = {
  name: string,
  value: ?string | ?number,
  type: DataFieldTypeT,
  disable: boolean,
  options?: DataFieldOptionT[],
  effects?: DataFieldEffectT[]
}
