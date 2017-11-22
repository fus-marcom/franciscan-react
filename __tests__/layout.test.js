/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'

import Layout from '../components/Layout'

describe('<Layout />', () => {
  it('should have Appbar', () => {
    const Wrapper = render(<Layout />)
    expect(Wrapper.find('Appbar')).toBeDefined()
  })
})
