import { fromJS } from 'immutable'
import casesReducer, * as fromCases from 'reducers/cases'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { ADD_CASE, SET_STAGE, SET_PAYMENT, DELETE_CASE, RESTORE_CASE } from 'reducers/cases'
import { STAGE_OVERVIEW, STAGE_PETITIONER } from 'constants/stages'

describe('Cases reducer', () => {
  it('handles ADD_CASE action', () => {
    const nextState = fromJS({
      jlfdsfsd: {
        stage: STAGE_OVERVIEW,
        payment: PAYMENT_NONE,
        data: {}
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
  it('handle DELETE_CASE action', () => {
    const state = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: {}
    })
    const action1 = { type: DELETE_CASE, caseId: 'jlfdsfsd' }
    const action2 = { type: DELETE_CASE, caseId: 'lkdeweqw' }
    const action3 = { type: DELETE_CASE, caseId: 'daslksal' }

    const nextState1 = fromJS({
      jlfdsfsd: { deleted: true },
      lkdeweqw: { deleted: true },
      daslksal: {}
    })
    const nextState2 = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: {}
    })
    const nextState3 = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: { deleted: true }
    })

    expect(casesReducer(state, action1)).toEqual(nextState1)
    expect(casesReducer(state, action2)).toEqual(nextState2)
    expect(casesReducer(state, action3)).toEqual(nextState3)
  })
  it('handle RESTORE_CASE action', () => {
    const state = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: {}
    })
    const action1 = { type: RESTORE_CASE, caseId: 'jlfdsfsd' }
    const action2 = { type: RESTORE_CASE, caseId: 'lkdeweqw' }
    const action3 = { type: RESTORE_CASE, caseId: 'daslksal' }

    const nextState1 = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: {}
    })
    const nextState2 = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: false },
      daslksal: {}
    })
    const nextState3 = fromJS({
      jlfdsfsd: { deleted: false },
      lkdeweqw: { deleted: true },
      daslksal: { deleted: false }
    })

    expect(casesReducer(state, action1)).toEqual(nextState1)
    expect(casesReducer(state, action2)).toEqual(nextState2)
    expect(casesReducer(state, action3)).toEqual(nextState3)
  })
})
it('getCaseIdsList selector returns correct list', () => {
  const state = fromJS({
    dfdafad: { name: 'Andy' },
    fdffewc: { name: 'Victoria'}
  })
  expect(fromCases.getCaseIdsList(state)).toEqual(['dfdafad', 'fdffewc'])
})
it('getActiveCaseIdsList selector returns correct list', () => {
  const state = fromJS({
    dfdafad: { data: { name: 'Andy' }, deleted: false },
    fdffewc: { data: { name: 'Victoria' }, deleted: true },
    ksaldll: { data: { name: 'Many' }, deleted: false },
  })
  expect(fromCases.getActiveCaseIdsList(state)).toEqual(['dfdafad', 'ksaldll'])
})
it('getDeletedCaseIdsList selector returns correct list', () => {
  const state = fromJS({
    dfdafad: { data: { name: 'Andy' }, deleted: true },
    fdffewc: { data: { name: 'Victoria' }, deleted: true },
    ksaldll: { data: { name: 'Many' }, deleted: false },
  })
  expect(fromCases.getDeletedCaseIdsList(state)).toEqual(['dfdafad', 'fdffewc'])
})
it('getCasesNumber', () => {
  const state = fromJS({
    dfdafad: { name: 'Andy' },
    fdffewc: { name: 'Victoria'}
  })
  expect(fromCases.getCasesNumber(state)).toBe(2)
  expect(fromCases.getCasesNumber(undefined)).toBe(0)
})
it('getActiveCasesNumber', () => {
  const state = fromJS({
    dfdafad: { name: 'Andy' },
    fdffewc: { name: 'Victoria'},
    lkdjald: { name: 'Jack', deleted: true}
  })
  expect(fromCases.getActiveCasesNumber(state)).toBe(2)
  expect(fromCases.getActiveCasesNumber(undefined)).toBe(0)
})
it('getDeletedCasesNumber', () => {
  const state = fromJS({
    dfdafad: { name: 'Andy' },
    fdffewc: { name: 'Victoria'},
    lkdjald: { name: 'Jack', deleted: true}
  })
  expect(fromCases.getDeletedCasesNumber(state)).toBe(1)
  expect(fromCases.getDeletedCasesNumber(undefined)).toBe(0)
})
it('getCaseStage', () => {
  const state = fromJS({
    dfdafad: { stage: STAGE_OVERVIEW },
    fdffewc: { stage: STAGE_PETITIONER }
  })
  expect(fromCases.getCaseStage(state, 'dfdafad')).toBe(STAGE_OVERVIEW)
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
        petitioner: {
          name: {
            first: 'Andy',
            family: '',
            middle: 'Largo'
          }
        }
      }
    },
    fdffewc: {
      data: {
        relative: {
          name: {
            first: 'Olef',
            family: 'Gilbert'
          }
        }
      }
    }
  })
  expect(fromCases.getCaseDataField(state, 'dfdafad', 'petitioner.name.first')).toEqual('Andy')
  expect(fromCases.getCaseDataField(state, 'fdffewc', 'relative.name.family')).toEqual('Gilbert')
})
it('getCaseDataFields', () => {
  const state = fromJS({
    dfdafad: {
      data: {
        petitioner: {
          name: {
            first: 'Andy',
            family: '',
            middle: 'Largo'
          }
        },
        relative: {
          name: {
            first: 'Olef',
            family: 'Gilbert'
          }
        }
      }
    },
    fdffewc: {
      data: {
        petitioner: {
          name: {
            first: 'Andy',
            family: '',
            middle: 'Largo'
          }
        },
        relative: {
          name: {
            first: 'Olef',
            family: 'Gilbert'
          }
        }
      }
    }
  })
  const fields = ['petitioner.name.first', 'relative.name.family']
  const data = {
    'petitioner.name.first': 'Andy',
    'relative.name.family': 'Gilbert'
  }
  expect(fromCases.getCaseDataFields(state, 'dfdafad', fields)).toEqual(data)
})
it('getCasesList', () => {
  const state = fromJS({
    dkdlasdad: {
      stage: STAGE_PETITIONER,
      data: {
        petitioner: {
          name: {
            first: 'Andy',
            family: 'Smith'
          }
        },
        relative: {
          name: {
            first: 'Victoria',
            family: ''
          }
        }
      }
    },
    dkopesdad: {
      stage: STAGE_OVERVIEW,
      data: {}
    },
    orpwesdad: {
      stage: STAGE_OVERVIEW,
      deleted: true,
      data: {
        petitioner: {
          name: {
            first: 'Sergey',
            family: 'Lohonev'
          }
        }
      }
    }
  })
  const activeCasesList = [
    {
      id: 'dkdlasdad',
      pName: 'Andy Smith',
      rName: 'Victoria',
      stage: STAGE_PETITIONER
    },
    {
      id: 'dkopesdad',
      pName: '%case 2',
      rName: '',
      stage: STAGE_OVERVIEW
    }
  ]
  const deletedCasesList = [
    {
      id: 'orpwesdad',
      pName: 'Sergey Lohonev',
      rName: '',
      stage: STAGE_OVERVIEW
    }
  ]
  expect(fromCases.getCasesList(state)).toEqual(activeCasesList)
  expect(fromCases.getCasesList(state, true)).toEqual(deletedCasesList)
})
it ('getDataFieldError selector returns correct value', () => {
  const state = fromJS({
    dasdasfd: {
      errors: {
        'petitioner.name.first': '%error-emptyField'
      }
    },
    dsadados: {
      errors: {
        'petitioner.name.second': undefined
      }
    }
  })
  expect(fromCases.getCaseDataFieldError(state, 'dasdasfd', 'petitioner.name.first'))
    .toEqual('%error-emptyField')
  expect(fromCases.getCaseDataFieldError(state, 'dsadados', 'petitioner.name.second'))
    .toBeUndefined()
})

/*
 * Action creators
 */

it('emits events for action effects', () => {
 let register = {}
 const dispatch = (action) => {
   if (typeof action === 'function') {
     action(dispatch)
   } else {
     register.caseId = action.caseId
     register[action.fieldName] = action.value
   }
 }
 const effects = [{
   fieldName: 'secondName',
   effect: () => 'Smith'
 }]
 const nextRegister = {
   caseId: '0f',
   firstName: 'Andy',
   secondName: 'Smith',
 }
 dispatch(fromCases.actions.changeDataField('0f', 'firstName', 'Andy', effects))
 expect(register).toEqual(nextRegister)
})

it('setFieldError action creator', () => {
  expect(fromCases.actions.setFieldError('dsadhaskld', 'petitioner.name.first', '%error-emptyField')).toMatchSnapshot()
})
it('removeFieldError action creator', () => {
  expect(fromCases.actions.removeFieldError('dsadhaskld', 'petitioner.name.first')).toMatchSnapshot()
})
it('addCase action creator', () => {
  expect(fromCases.actions.addCase('dsadhaskld')).toMatchSnapshot()
})
it('deleteCase action creator', () => {
  expect(fromCases.actions.deleteCase('dsadhaskld')).toMatchSnapshot()
})
it('restoreCase action creator', () => {
  expect(fromCases.actions.restoreCase('dsadhaskld')).toMatchSnapshot()
})
it('restoreCase action creator', () => {
  expect(fromCases.actions.restoreCase('dsadhaskld')).toMatchSnapshot()
})
it('setStage action creator', () => {
  expect(fromCases.actions.setStage('dsadhaskld', 'test-stage')).toMatchSnapshot()
})
it('setPayment action creator', () => {
  expect(fromCases.actions.setPayment('dsadhaskld', 'test-payment-status')).toMatchSnapshot()
})
