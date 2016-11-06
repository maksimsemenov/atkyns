import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router'
import FormNavItem from './FormNavItem'
import { STAGE_OVERVIEW } from 'constants/stages'

describe('FormNavItem component', () => {
  it('renders without craches', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <FormNavItem stage={STAGE_OVERVIEW} caseId='dasdasdda' />
      </BrowserRouter>,
      div
    )
  })
})
