/* eslint-env jest */
import React from 'react'
import { render } from 'enzyme'

import Appbar from '../components/AppBar'

describe('<Appbar />', () => {
  const Wrapper = render(<Appbar />)
  it('should have a link to homepage ', () => {
    expect(Wrapper.find('a').attr('href')).toEqual('/')
  })
})
