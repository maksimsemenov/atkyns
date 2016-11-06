import React from 'react'
import renderer from 'react-test-renderer'
import Textfield, * as fromTextfield from './Textfield'
jest.mock('react-dom')

describe('Textfield component', () => {
  it('Snapshot test', () => {
    const component0 = renderer.create(<Textfield onChange={() => {}} />)
    expect(component0.toJSON()).toMatchSnapshot()

    const component1 = renderer.create(
      <Textfield
        onChange={() => {}}
        note='Note for the field'
      />
    )
    expect(component1.toJSON()).toMatchSnapshot()

    const component2 = renderer.create(
      <Textfield
      onChange={() => {}}
      error='Error in field'
      />
    )
    expect(component2.toJSON()).toMatchSnapshot()

    const component3 = renderer.create(
      <Textfield
        onChange={() => {}}
        value='Test value'
        autocomplete={{
          items: [
            { value: 'item1', name: 'item1' },
            { value: 'item2', name: 'item2' },
            { value: 'item3', name: 'item3' }
          ]
        }}
      />
    )
    expect(component3.toJSON()).toMatchSnapshot()
  })
})

describe('renderMenu function', () => {
  it('Snapshot test', () => {
    const tree = renderer.create(fromTextfield.renderMenu(['item1', 'item2']))
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
describe('renderItem function', () => {
  it('Snapshot test', () => {
    const tree1 = renderer.create(fromTextfield.renderItem({ value: 'item1', name: 'item2' }, false))
    expect(tree1.toJSON()).toMatchSnapshot()
    const tree2 = renderer.create(fromTextfield.renderItem({ value: 'item1', name: 'item2' }, true))
    expect(tree2.toJSON()).toMatchSnapshot()
  })
})
it('shouldItemRender works correctly', () => {
  expect(fromTextfield.shouldItemRender({ value: 'Test item'}, 'ite')).toBeTruthy()
  expect(fromTextfield.shouldItemRender({ value: 'Test item'}, 'abr')).toBeFalsy()
})
it('getItemValue works correctly', () => {
  expect(fromTextfield.getItemValue({ name: 'Albert' })).toEqual('Albert')
  expect(fromTextfield.getItemValue({})).toBeUndefined()
})
