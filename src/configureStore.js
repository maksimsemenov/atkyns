import { createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
import throttle from 'lodash/throttle'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { loadState, saveState } from 'localStorage'
import reducer from 'reducers'

let middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    stateTransformer: (state) => state.toJS()
  })
  middleware.push(logger)
}

const configureStore = () => {
  const persistedState = fromJS({ cases: loadState() })
  const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(...middleware)
  )

  store.subscribe(throttle(() => {
    saveState(store.getState().get('cases').toJS())
  }), 2000)

  return store
}
export default configureStore
