import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router/BrowserRouter'
import FormNav from 'components/FormNav/FormNav'
import { STAGE_OVERVIEW, STAGE_RELATIVE } from 'constants/stages'

describe('FormNav component', () => {
  it('renders without craches', () => {
    const stages = [
      {
        name: STAGE_OVERVIEW,
        progress: 20
      },
      {
        name: STAGE_RELATIVE,
        progress: 0
      }
    ]
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><FormNav stages={stages} caseId='dsadajoiho' /></BrowserRouter>, div)
  })
})
