import { fromJS } from 'immutable'
import caseReducer, * as fromCase from 'reducers/case'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { CHANGE_FIELD, SET_STAGE, SET_PAYMENT, DELETE_CASE, RESTORE_CASE } from 'constants/actionTypes'
import { STAGE_OVERVIEW } from 'constants/stages'

describe('Case reducer', () => {
  it('returns state for default action', () => {
    const state = fromJS({ stage: STAGE_OVERVIEW })
    expect(caseReducer(state, {})).toEqual(state)
  })
  it('handles CHANGE_FIELD action', () => {
    const state = fromJS({
      data: {
        petitioner: {}
      }
    })
    const action1 = {
      type: CHANGE_FIELD,
      fieldName: 'petitioner/name/first',
      dataPatch: 'Andy'
    }
    const nextState1 = fromJS({
      data: {
        petitioner: {
          name: {
            first: 'Andy'
          }
        }
      }
    })

    expect(caseReducer(state, action1)).toEqual(nextState1)
  })
  it('handles SET_STAGE action', () => {
    const state = fromJS({ stage: STAGE_OVERVIEW })
    const action = { type: SET_STAGE, newStage: 1 }
    expect(caseReducer(state, action)).toEqual(fromJS({ stage: 1 }))
  })
  it('handles SET_PAYMENT action', () => {
    const state = fromJS({ payment: PAYMENT_NONE })
    const action = { type: SET_PAYMENT, newPaymentStatuse: PAYMENT_FULL }
    expect(caseReducer(state, action)).toEqual(fromJS({ payment: PAYMENT_FULL }))
  })
  it('handle DELETE_CASE action', () => {
    const state = fromJS({ deleted: false })
    const action = { type: DELETE_CASE }
    expect(caseReducer(state, action)).toEqual(fromJS({ deleted: true }))
  })
  it('handle RESTORE_CASE action', () => {
    const state = fromJS({ deleted: true })
    const action = { type: RESTORE_CASE }
    expect(caseReducer(state, action)).toEqual(fromJS({ deleted: false }))
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
      stage: STAGE_OVERVIEW,
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
    stage: STAGE_OVERVIEW
  })
  expect(fromCase.getStage(state)).toBe(STAGE_OVERVIEW)
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
    stage: STAGE_OVERVIEW
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
      petitioner: {
        name: {
          first: 'Andy',
          family: '',
          middle: 'Verning'
        }
      }
    }
  })
  expect(fromCase.getDataField(state, 'petitioner/name/first')).toBe('Andy')
})
it ('getDataFields selector returns correct value', () => {
  const state = fromJS({
    data: {
      petitioner: {
        name: {
          first: 'Andy',
          family: '',
          middle: 'Larry'
        }
      }
    }
  })
  const fields = [
    'petitioner/name/first',
    'petitioner/name/family',
    'petitioner/name/middle'
  ]
  const data = {
    'petitioner/name/first': 'Andy',
    'petitioner/name/family': '',
    'petitioner/name/middle': 'Larry'
  }
  expect(fromCase.getDataFields(state, fields)).toEqual(data)
})
