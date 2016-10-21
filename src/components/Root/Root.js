import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Match, Miss } from 'react-router'
import Home from 'components/Home/Home'
import Form from 'components/Form/Form'
import PDF from 'components/PDF/PDF'
import './Root.less'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern='/pdf/:form' component={PDF} />
        <Match pattern='/case/:caseId/:stage' component={Form} />
        <Miss component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default Root
