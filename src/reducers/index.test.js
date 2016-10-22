import { fromJS } from 'immutable'
import rootReducer, * as fromReducer from 'reducers'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { STAGE_OVERVIEW, STAGE_PETITIONER } from 'constants/stages'

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
    }
  })
  expect(fromReducer.getCaseDataField(state, 'dfdafad', 'petitioner/name/first')).toEqual('Andy')
  expect(fromReducer.getCaseDataField(state, 'fdffewc', 'relative/name/family')).toEqual('Gilbert')
})
it('getCaseDataFields', () => {
  const state = fromJS({
    cases: {
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
    }
  })
  const fields = ['petitioner/name/first', 'relative/name/family']
  const data = {
    'petitioner/name/first': 'Andy',
    'relative/name/family': 'Gilbert'
  }
  expect(fromReducer.getCaseDataFields(state, 'dfdafad', fields)).toEqual(data)
})
it('getCasesList', () => {
  const state = fromJS({
    cases: {
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
  expect(fromReducer.getCasesList(state)).toEqual(activeCasesList)
  expect(fromReducer.getCasesList(state, true)).toEqual(deletedCasesList)
})
