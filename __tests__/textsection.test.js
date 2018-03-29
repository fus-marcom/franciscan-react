/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import TextSection from '../components/TextSection'

describe('TextSection', () => {
  it('should be defined', () => {
    expect(TextSection).toBeDefined()
  })
  it('should render', () => {
    const wrapper = shallow(<TextSection />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
  it('should render text when passed in', () => {
    const wrapper = shallow(<TextSection text="Test text" />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
