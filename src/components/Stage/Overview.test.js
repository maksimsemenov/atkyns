import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'configureStore'
import Overview from 'components/Stage/Overview'

describe('Overview component', () => {
  it('Snapshot test', () => {
    const store = configureStore()
    const tree = renderer
      .create(
        <Provider store={store}>
          <Overview caseId='32sdasdljk' />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
