import React, { Component } from 'react'
import Link from 'next/link'

export default class HatList extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link href="/hats/1">hat 1</Link>
          </li>
          <li>
            <Link href="/hats/Silly-hat">silly hat</Link>
          </li>
          <li>
            <Link href="/hats/3">hat 3</Link>
          </li>
          <li>
            <Link href="/hats/blue">Blue hat</Link>
          </li>
        </ul>
      </div>
    )
  }
}
