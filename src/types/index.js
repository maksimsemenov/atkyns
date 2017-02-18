// @flow

export type MarriageT = {
  id: string,
  spouses: [string, string],
  current: bool,
  start?: {
    date: string,
    place: string
  },
  end?: {
    date: string,
    place: string
  }
}

export type PersonT = {
  id: string,
  name: {
    first: ?string,
    middle: ?string,
    family: ?string,
    fullName: ?string,
    other: ?string,
    native: ?string
  },
  birth: {
    date: string,
    city: string,
    country: string
  },
  maritalStatus?: 'married' | 'single' | 'widowed' | 'divorced',
  marriages: Array<string>
}

export type CaseT = {
  petitioner: string,
  relative: string,
  relation: 'spouse' | 'child' | 'parent' | 'brother',
  relatedByAdoption: bool
}
