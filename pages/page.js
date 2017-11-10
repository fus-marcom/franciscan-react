import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to age 2</p>
    <Link href={'/'}>
      <a>Go back to the homepage</a>
    </Link>
  </Layout>
)

export default SecondPage
