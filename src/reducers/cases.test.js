import { fromJS } from 'immutable'
import values from 'lodash/values'
import casesReducer, * as fromCases from 'reducers/cases'
import { initialData} from 'reducers/case'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { ADD_CASE, SET_STAGE, SET_PAYMENT, CHANGE_FIELD } from 'constants/actionTypes'
import * as DFN from 'constants/dataFieldNames'

describe('Cases reducer', () => {
  it('handles ADD_CASE action', () => {
    const nextState = fromJS({
      jlfdsfsd: {
        stage: 0,
        payment: PAYMENT_NONE,
        data: initialData(values(DFN))
      }
    })
    const action = { type: ADD_CASE, caseId: 'jlfdsfsd' }
    expect(casesReducer(undefined, action)).toEqual(nextState)
  })
  it('handle SET_STAGE action', () => {
    const state = fromJS({
      fdfdfa: { stage: 4 },
      roqwsa: { stage: 7 }
    })
    const action = {
      type: SET_STAGE,
      caseId: 'fdfdfa',
      newStage: 8
    }
    const nextState = fromJS({
      fdfdfa: { stage: 8 },
      roqwsa: { stage: 7 }
    })
    expect(casesReducer(state, action)).toEqual(nextState)
  })
  it('handle SET_PAYMENT action', () => {
    const state = fromJS({
      fdfdfa: { payment: PAYMENT_NONE },
      roqwsa: { payment: PAYMENT_FULL }
    })
    const action = {
      type: SET_PAYMENT,
      caseId: 'fdfdfa',
      newPaymentStatuse: PAYMENT_FULL
    }
    const nextState = fromJS({
      fdfdfa: { payment: PAYMENT_FULL },
      roqwsa: { payment: PAYMENT_FULL }
    })
    expect(casesReducer(state, action)).toEqual(nextState)
  })
})
it('getCaseIdsList selector returns correct list', () => {
  const state = fromJS({
    dfdafad: { name: 'Andy' },
    fdffewc: { name: 'Victoria'}
  })
  expect(fromCases.getCaseIdsList(state)).toEqual(['dfdafad', 'fdffewc'])
})
it('getCaseStage', () => {
  const state = fromJS({
    dfdafad: { stage: 3 },
    fdffewc: { stage: 1 }
  })
  expect(fromCases.getCaseStage(state, 'dfdafad')).toBe(3)
})
it('getCaseProgress', () => {
  const state = fromJS({
    dfdafad: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: ''
        },
        middleName: {
          disable: true
        }
      }
    },
    fdffewc: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: 'Smith'
        },
      }
    }
  })
  expect(fromCases.getCaseProgress(state, 'dfdafad')).toBe(50)
})
it('getCasePaymentStatuse', () => {
  const state = fromJS({
    dfdafad: { payment: PAYMENT_NONE },
    fdffewc: { payment: PAYMENT_FULL }
  })
  expect(fromCases.getCasePaymentStatuse(state, 'dfdafad')).toBe(PAYMENT_NONE)
  expect(fromCases.getCasePaymentStatuse(state, 'fdffewc')).toBe(PAYMENT_FULL)
})
it('getCaseData', () => {
  const state = fromJS({
    dfdafad: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: ''
        },
        middleName: {
          disable: true
        }
      }
    },
    fdffewc: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: 'Smith'
        },
      }
    }
  })
  const data1 = {
    firstName: {
      value: 'Andy'
    },
    familyName: {
      value: ''
    },
    middleName: {
      disable: true
    }
  }
  const data2 = {
    firstName: {
      value: 'Andy'
    },
    familyName: {
      value: 'Smith'
    },
  }
  expect(fromCases.getCaseData(state, 'dfdafad')).toEqual(data1)
  expect(fromCases.getCaseData(state, 'fdffewc')).toEqual(data2)
})
it('getCaseDataField', () => {
  const state = fromJS({
    dfdafad: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: ''
        },
        middleName: {
          disable: true
        }
      }
    },
    fdffewc: {
      data: {
        firstName: {
          value: 'Bill'
        },
        familyName: {
          value: 'Smith'
        },
      }
    }
  })
  expect(fromCases.getCaseDataField(state, 'dfdafad', 'firstName')).toEqual('Andy')
  expect(fromCases.getCaseDataField(state, 'fdffewc', 'firstName')).toEqual('Bill')
})
it('getCaseDataFields', () => {
  const state = fromJS({
    dfdafad: {
      data: {
        firstName: {
          value: 'Andy'
        },
        familyName: {
          value: ''
        },
        middleName: {
          disable: true
        }
      }
    },
    fdffewc: {
      data: {
        firstName: {
          value: 'Bill'
        },
        familyName: {
          value: 'Smith'
        },
      }
    }
  })
  const fields = ['firstName', 'middleName']
  const data = {
    firstName: 'Andy',
    middleName: ''
  }
  expect(fromCases.getCaseDataFields(state, 'dfdafad', fields)).toEqual(data)
})
it('getCasesList', () => {
  const state = fromJS({
    dkdlasdad: {
      stage: 1,
      data: {
        pFirstName: {
          value: 'Andy'
        },
        pFamilyName: {
          value: 'Smith'
        },
        rFirstName: {
          value: 'Victoria'
        },
        rFamilyName: {
          value: '',
          disable: true
        },
        pMiddleName: {
          value: '',
          disable: true
        }
      }
    },
    dkopesdad: {
      stage: 0,
      data: {
        pFirstName: {
          value: ''
        },
        pFamilyName: {
          value: ''
        },
        rFirstName: {
          value: ''
        },
        rFamilyName: {
          value: ''
        },
      }
    }
  })
  const casesList = [
    {
      id: 'dkdlasdad',
      pName: 'Andy Smith',
      rName: 'Victoria',
      stage: 1,
      progress: 100
    },
    {
      id: 'dkopesdad',
      pName: '%case 2',
      rName: '',
      stage: 0,
      progress: 0
    }
  ]
  expect(fromCases.getCasesList(state)).toEqual(casesList)
})
