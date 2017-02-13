import 'utils/l10n.js' // add lazy localisation

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/Root/Root'
import configureStore from 'configureStore'
import './index.less'

const store = configureStore()
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
