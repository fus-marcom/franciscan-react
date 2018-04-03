/* eslint-env jest */
import React from 'react'
import { render } from 'enzyme'

import Index from '../pages/index'

describe('<Index />', () => {
  it('should be defined', () => {
    expect(Index).toBeDefined()
  })
  it('should render', () => {
    const wrapper = render(<Index />)
    expect(wrapper).toMatchSnapshot()
  })
})
