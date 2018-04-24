/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'

import TextSection from '../components/TextSection'

describe('TextSection', () => {
  it('should be defined', () => {
    expect(TextSection).toBeDefined()
  })
  it('should render', () => {
    const wrapper = mount(<TextSection />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render text when passed in', () => {
    const wrapper = mount(<TextSection text="Test text" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render a title when passed in', () => {
    const wrapper = mount(<TextSection sectionTitle="Test Title" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render a title when passed in', () => {
    const wrapper = mount(<TextSection textColor="#000" />)
    expect(wrapper).toMatchSnapshot()
  })
})
