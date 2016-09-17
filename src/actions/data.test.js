import { changeDataFieldThunk } from 'actions/data'

describe('Data field Actions', () => {
  it('emits events for action effects', () => {
    let register = {}
    const dispatch = (action) => {
      if (typeof action === 'function') {
        action(dispatch)
      } else {
        register.caseId = action.caseId
        register[action.fieldName] = action.dataPatch
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

    dispatch(changeDataFieldThunk('0f', 'firstName', 'Andy', effects))

    expect(register).toEqual(nextRegister)
  })
})
