import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Router from 'react-router-dom/BrowserRouter'
import configureStore from 'configureStore'
import Overview from 'components/Stage/Overview'

describe('Overview component', () => {
  it('Snapshot test', () => {
    const store = configureStore()
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Overview caseId='32sdasdljk' />
          </Router>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
