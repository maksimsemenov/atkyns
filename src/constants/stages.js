import * as fieldNames from 'constants/dataFieldNames'

export const STAGE_OVERVIEW = 'overview'
export const STAGE_PETITIONER = 'petitioner'
export const STAGE_RELATIVE = 'relative'
export const STAGE_PETITION = 'petition'

export const stages = [
  { name: STAGE_OVERVIEW },
  { name: STAGE_PETITIONER },
  { name: STAGE_RELATIVE },
  { name: STAGE_PETITION }
]

// const stages = {
//   '0': [
//     fieldNames.RELASHIONSHIP,
//     fieldNames.REL_BY_ADOPTION,
//     fieldNames.RES_THROUGH_ADOPTION
//   ]
// }
//
// export default stages
