import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link href={'/page'}>
      <a>Go to page 2</a>
    </Link>
  </Layout>
)

export default IndexPage
