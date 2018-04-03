/* eslint-env jest */
import React from 'react'
// import sinon from 'sinon'
import { mount } from 'enzyme'

import DrawerItem from '../components/DrawerItem'

describe('DrawerItem', () => {
  it('should be defined', () => {
    expect(DrawerItem).toBeDefined()
  })
  it('should render', () => {
    const wrapper = mount(<DrawerItem />)
    expect(wrapper).toMatchSnapshot()
  })
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy()
  //   const wrapper = mount(<DrawerItem expandItem={onButtonClick} />)
  //   wrapper.find('button').simulate('click')
  //   expect(wrapper.state().isOpen).toEqual(true)
  // })
})
