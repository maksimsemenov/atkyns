import React from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router-dom/BrowserRouter'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Home from 'components/Home/Home'
import Form from 'components/Form/Form'
import PDF from 'components/PDF/PDF'
import './Root.less'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/pdf/:form' component={PDF} />
        <Route path='/case/:caseId/:stage' component={Form} />
        <Route component={Home} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
