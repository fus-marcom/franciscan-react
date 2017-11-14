/* eslint-env jest */

import React from 'react'
import { mount, render } from 'enzyme'

import Layout from '../components/Layout'

describe('<Layout />', () => {
  it('should have Appbar', () => {
    const Wrapper = render(<Layout />)
    expect(Wrapper.find('Appbar')).toBeDefined()
  })

  it('should have Drawer', () => {
    const Wrapper = mount(<Layout />)
    Wrapper.setState({ drawer: true })
    expect(Wrapper.find('Drawer')).toBeDefined()
  })
})
