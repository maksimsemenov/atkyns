import React from 'react'
import renderer from 'react-test-renderer'
import BrowserRouter from 'react-router/BrowserRouter'
import FormNav from './FormNav'
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
    const tree = renderer
      .create(
        <BrowserRouter>
          <FormNav stages={stages} stage={STAGE_OVERVIEW} caseId='dsadajoiho' />
        </BrowserRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
