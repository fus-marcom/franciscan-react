import React from 'react'
import Link from 'next/link'
import withRoot from '../components/Layout'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to age 2</p>
    <Link href={'/'}>
      <a>Go back to the homepage</a>
    </Link>
  </div>
)

export default withRoot(SecondPage)
