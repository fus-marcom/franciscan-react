/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Index from '../pages/index'

describe('<Index />', () => {
  it('should be defined', () => {
    expect(Index).toBeDefined()
  })
  it('should render', () => {
    const wrapper = shallow(<Index />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
