/* eslint-env jest */
import React from 'react'
import { render } from 'enzyme'

import Appbar from '../components/AppBar'

describe('<Appbar />', () => {
  const Wrapper = render(<Appbar />)
  it('should render the franciscan image', () => {
    expect(Wrapper.find('img').attr('src')).toEqual('/static/img/fus-logo.svg')
  })
  it('should have the logo img wrapped in a HTML anchor tag', () => {
    expect(
      Wrapper.find('a')
        .find('img')
        .attr('src')
    ).toEqual('/static/img/fus-logo.svg')
  })
  it('should have a link to homepage ', () => {
    expect(Wrapper.find('a').attr('href')).toEqual('/')
  })
})
