import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to age 2</p>
    <Link href={'/'}>
      <a>Go back to the homepage</a>
    </Link>
  </Layout>
)

export default withRoot(SecondPage)
