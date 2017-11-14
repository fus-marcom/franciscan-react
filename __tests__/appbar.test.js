/* eslint-env jest */
import React from 'react'
import { render } from 'enzyme'

import Appbar from '../components/AppBar'

describe('<Appbar />', () => {
  it('should render the franciscan image', () => {
    const Wrapper = render(<Appbar />)
    expect(Wrapper.find('img').attr('src')).toEqual('/static/img/fus-logo.svg')
  })
})
