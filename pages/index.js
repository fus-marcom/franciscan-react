import React from 'react'
import Link from 'next/link'
import withRoot from '../components/Layout'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link href={'/page'}>
      <a>Go to page 2</a>
    </Link>
  </div>
)

export default withRoot(IndexPage)
