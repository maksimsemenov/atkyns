import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Case from 'components/Cases/Case/Case'

describe('Case component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    const linkOptions = {
      isActive: () => false
    }
    ReactDOM.render(
      <BrowserRouter>
        <Case
        id='dsdsa'
        pName='Case 0'
        linkOptions={linkOptions}
        onCaseDelete={() => {}}
        />
      </BrowserRouter>,
      div
    )
  })
})
