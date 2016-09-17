/* @flow */
/* This file describes all data fields that we have in a project as well as relationships between them. Relationsips describes as effects that one field will cause on another
*/

import type { DataFieldT } from '../types/DataFieldT'

import * as fieldTypes from 'constants/fieldTypes'
import * as relTypes from 'constants/relationshipTypes'
import * as DFN from 'constants/dataFieldNames'

const dataFields: DataFieldT[] = [
  {
    name: DFN.RELASHIONSHIP,
    value: '',
    type: fieldTypes.OPTION,
    disable: false,
    options: [
      { value: relTypes.SPOUSE },
      { value: relTypes.PARENT },
      { value: relTypes.BROTHER },
      { value: relTypes.CHILD },
    ],
    effects: [
      {
        fieldName: DFN.REL_BY_ADOPTION,
        effect: ({ value }) => ({
          disable: value === relTypes.SPOUSE ? true : false
        })
      }
    ]
  },
  {
    name: 'relByAdoption',
    value: '',
    type: fieldTypes.BOOLEAN,
    disable: false
  },
  {
    name: 'resThroughAdoption',
    value: '',
    type: fieldTypes.BOOLEAN,
    disable: false
  },
  {
    name: 'pfirstName',
    value: '',
    type: fieldTypes.TEXT,
    disable: false
  }
]

export default dataFields
