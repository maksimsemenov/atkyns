import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Match } from 'react-router'
import Home from 'components/Home/Home'
import Form from 'components/Form/Form'
import './Root.less'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Match exactly pattern='/' component={Home} />
    </BrowserRouter>
  </Provider>
)

export default Root
