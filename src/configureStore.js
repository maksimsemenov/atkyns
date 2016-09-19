import { createStore } from 'redux'
import { fromJS } from 'immutable'
import throttle from 'lodash/throttle'
import { loadState, saveState } from 'localStorage'
import reducer from 'reducers'

const configureStore = () => {
  const persistedState = fromJS({ cases: loadState() })
  const store = createStore(reducer, persistedState)

  store.subscribe(throttle(() => {
    saveState(store.getState().get('cases').toJS())
  }), 2000)

  return store
}
export default configureStore
