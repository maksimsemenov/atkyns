import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import throttle from 'lodash/throttle'
import thunk from 'redux-thunk'
import { loadState, saveState } from 'localStorage'
import reducer from 'reducers'

let middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const configureStore = () => {
  const persistedState = fromJS({ cases: loadState() })
  const store = createStore(
    reducer,
    persistedState,
    enhancer
  )

  store.subscribe(throttle(() => {
    saveState(store.getState().get('cases').toJS())
  }), 2000)

  return store
}
export default configureStore
