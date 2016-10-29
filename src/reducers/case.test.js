import { fromJS } from 'immutable'
import caseReducer, * as fromCase from 'reducers/case'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { actionTypes } from 'reducers/cases'
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
      type: actionTypes.CHANGE_FIELD,
      fieldName: 'petitioner.name.first',
      value: 'Andy'
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
    const action = { type: actionTypes.SET_STAGE, newStage: 1 }
    expect(caseReducer(state, action)).toEqual(fromJS({ stage: 1 }))
  })
  it('handles SET_PAYMENT action', () => {
    const state = fromJS({ payment: PAYMENT_NONE })
    const action = { type: actionTypes.SET_PAYMENT, newPaymentStatuse: PAYMENT_FULL }
    expect(caseReducer(state, action)).toEqual(fromJS({ payment: PAYMENT_FULL }))
  })
  it('handle DELETE_CASE action', () => {
    const state = fromJS({ deleted: false })
    const action = { type: actionTypes.DELETE_CASE }
    expect(caseReducer(state, action)).toEqual(fromJS({ deleted: true }))
  })
  it('handle RESTORE_CASE action', () => {
    const state = fromJS({ deleted: true })
    const action = { type: actionTypes.RESTORE_CASE }
    expect(caseReducer(state, action)).toEqual(fromJS({ deleted: false }))
  })
  it('handle SET_FIELD_ERROR action', () => {
    const state = fromJS({})
    const action = {
      type: actionTypes.SET_FIELD_ERROR,
      fieldName: 'petitioner',
      error: '%error-emptyField'
    }
    expect(caseReducer(state, action))
      .toEqual(fromJS({ errors: { petitioner: '%error-emptyField' } }))
  })
  it('handle SET_FIELD_ERROR action', () => {
    const state = fromJS({ errors: { petitioner: '%error-emptyField' } })
    const action = {
      type: actionTypes.SET_FIELD_ERROR,
      fieldName: 'petitioner'
    }
    expect(caseReducer(state, action))
      .toEqual(fromJS({ errors: { petitioner: undefined } }))
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
  expect(fromCase.getDataField(state, 'petitioner.name.first')).toBe('Andy')
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
    'petitioner.name.first',
    'petitioner.name.family',
    'petitioner.name.middle'
  ]
  const data = {
    'petitioner.name.first': 'Andy',
    'petitioner.name.family': '',
    'petitioner.name.middle': 'Larry'
  }
  expect(fromCase.getDataFields(state, fields)).toEqual(data)
})
it ('getDataFieldError selector returns correct value', () => {
  const state = fromJS({ errors: { 'petitioner.name.first': '%error-emptyField' }})
  expect(fromCase.getDataFieldError(state, 'petitioner.name.first'))
    .toEqual('%error-emptyField')
  expect(fromCase.getDataFieldError(state, 'petitioner.name.second'))
    .toBeUndefined()
})
