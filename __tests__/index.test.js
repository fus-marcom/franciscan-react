/* eslint-env jest */
import React from 'react'
import { render } from 'enzyme'

import Index from '../pages/index'

describe('<Index />', () => {
  it('should render', () => {
    const Wrapper = render(<Index />)
    expect(Wrapper)
  })
})
