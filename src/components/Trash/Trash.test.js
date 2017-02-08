import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from 'react-router-dom/BrowserRouter'
import configureStore from 'configureStore'
import Trash from 'components/Trash/Trash'

describe('Trash component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const store = configureStore()
    ReactDOM.render(<Provider store={store}><Router><Trash /></Router></Provider>, div)
  })
})
