import { fromJS } from 'immutable'
import rootReducer, * as fromReducer from 'reducers'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'

describe('Root reducer', () => {
  it('returns correct empty state', () => {
    const state = fromJS({ cases: {} })
    expect(rootReducer(undefined, {})).toEqual(state)
  })
})
it('getCaseStage', () => {
  const state = fromJS({
    cases: {
    dfdafad: { stage: 3 },
    fdffewc: { stage: 1 }
  }})
  expect(fromReducer.getCaseStage(state, 'dfdafad')).toBe(3)
})
it('getCaseProgress', () => {
  const state = fromJS({
    cases: {
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
  }})
  expect(fromReducer.getCaseProgress(state, 'dfdafad')).toBe(50)
})
it('getCasePaymentStatuse', () => {
  const state = fromJS({
    cases: {
    dfdafad: { payment: PAYMENT_NONE },
    fdffewc: { payment: PAYMENT_FULL }
  }})
  expect(fromReducer.getCasePaymentStatuse(state, 'dfdafad')).toBe(PAYMENT_NONE)
  expect(fromReducer.getCasePaymentStatuse(state, 'fdffewc')).toBe(PAYMENT_FULL)
})
it('getCaseData', () => {
  const state = fromJS({
    cases: {
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
  }})
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
  expect(fromReducer.getCaseData(state, 'dfdafad')).toEqual(data1)
  expect(fromReducer.getCaseData(state, 'fdffewc')).toEqual(data2)
})
it('getCaseDataField', () => {
  const state = fromJS({
    cases: {
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
  }})
  expect(fromReducer.getCaseDataField(state, 'dfdafad', 'firstName')).toEqual('Andy')
  expect(fromReducer.getCaseDataField(state, 'fdffewc', 'firstName')).toEqual('Bill')
})
it('getCaseDataFields', () => {
  const state = fromJS({
    cases: {
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
  }})
  const fields = ['firstName', 'middleName']
  const data = {
    firstName: 'Andy',
    middleName: ''
  }
  expect(fromReducer.getCaseDataFields(state, 'dfdafad', fields)).toEqual(data)
})
it('getCasesList', () => {
  const state = fromJS({
    cases: {
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
  expect(fromReducer.getCasesList(state)).toEqual(casesList)
})
