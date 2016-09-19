import { fromJS } from 'immutable'
import caseReducer, * as fromCase from 'reducers/case'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { CHANGE_FIELD, SET_STAGE, SET_PAYMENT } from 'constants/actionTypes'

describe('Case reducer', () => {
  it('returns state for default action', () => {
    const state = fromJS({ stage: 0 })
    expect(caseReducer(state, {})).toEqual(state)
  })
  it('handles CHANGE_FIELD action', () => {
    const state = fromJS({
      data: {
        firstName: {
          value: '',
          disable: false
        }
      }
    })
    const action1 = {
      type: CHANGE_FIELD,
      fieldName: 'firstName',
      dataPatch: {
        value: 'Andy'
      }
    }
    const action2 = {
      type: CHANGE_FIELD,
      fieldName: 'firstName',
      dataPatch: {
        disable: true
      }
    }
    const nextState1 = fromJS({
      data: {
        firstName: {
          value: 'Andy',
          disable: false
        }
      }
    })
    const nextState2 = fromJS({
      data: {
        firstName: {
          value: '',
          disable: true
        }
      }
    })

    expect(caseReducer(state, action1)).toEqual(nextState1)
    expect(caseReducer(state, action2)).toEqual(nextState2)
  })
  it('handles SET_STAGE action', () => {
    const state = fromJS({ stage: 0 })
    const action = { type: SET_STAGE, newStage: 1 }
    expect(caseReducer(state, action)).toEqual(fromJS({ stage: 1 }))
  })
  it('handles SET_PAYMENT action', () => {
    const state = fromJS({ payment: PAYMENT_NONE })
    const action = { type: SET_PAYMENT, newPaymentStatuse: PAYMENT_FULL }
    expect(caseReducer(state, action)).toEqual(fromJS({ payment: PAYMENT_FULL }))
  })
})
describe('Case initialState function', () => {
  it('produces correct initial state from map', () => {
    const fields = {
      RELASHIONSHIP: 'relashionship',
      REL_BY_ADOPTION: 'relByAdoption',
      RES_THROUGH_ADOPTION: 'resThroughAdoption'
    }
    const nextState = fromJS({
      stage: 0,
      payment: PAYMENT_NONE,
      data: {
        relashionship: {
          value: '',
          disable: false
        },
        relByAdoption: {
          value: '',
          disable: false
        },
        resThroughAdoption: {
          value: '',
          disable: false
        }
      }
    })
    expect(fromCase.initialState(fields)).toEqual(nextState)
  })
})
it ('getStage selector returns correct value', () => {
  const state = fromJS({
    stage: 34
  })
  expect(fromCase.getStage(state)).toBe(34)
})
it ('getProgress selector returns correct value', () => {
  const state = fromJS({
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
  })
  const state2 = fromJS({
    stage: 0
  })
  expect(fromCase.getProgress(state)).toBe(50)
  expect(fromCase.getProgress(state2)).toBe(0)
})
it ('getPaymentStatuse selector returns correct value', () => {
  const state = fromJS({
    payment: PAYMENT_NONE
  })
  expect(fromCase.getPaymentStatuse(state)).toBe(PAYMENT_NONE)
})
it ('getData selector returns correct value', () => {
  const state = fromJS({
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
  })
  const data = {
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
  expect(fromCase.getData(state)).toEqual(data)
})
it ('getDataField selector returns correct value', () => {
  const state = fromJS({
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
  })
  expect(fromCase.getDataField(state, 'firstName')).toBe('Andy')
})
it ('getDataFields selector returns correct value', () => {
  const state = fromJS({
    data: {
      firstName: {
        value: 'Andy'
      },
      familyName: {
      },
      middleName: {
        value: 'Larry',
        disable: true
      },
      age: {
        value: ''
      }
    }
  })
  const fields = ['firstName', 'familyName', 'age']
  const data = {
    firstName: 'Andy',
    familyName: '',
    age: ''
  }
  expect(fromCase.getDataFields(state, fields)).toEqual(data)
})
