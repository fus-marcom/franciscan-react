import React, { Component } from 'react'
import { compose } from 'react-apollo'

import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

class Page extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }
  render () {
    const { data } = this.props
    const loading = data.loading
    const query = gql`
      query SomeQuery {
        foo {
          bar
          baz
        }
      }
    `
    if (loading) {
      return (
        <Layout>
          <h1>Loading</h1>
        </Layout>
      )
    }
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/news.css"
            type="text/css"
          />
        </Head>
        <div
          data-testid="content"
          dangerouslySetInnerHTML={{
            __html: data[this.props.type].edges[0].node.content
          }}
        />
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData
)(Page)
