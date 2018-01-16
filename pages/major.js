import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { MajorQuery } from '../lib/queries/major'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

class Major extends Component {
  static async getInitialProps ({ query: { id } }) {
    return { id }
  }
  render () {
    const { data } = this.props
    const loading = data.loading
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
            __html: data.majors.edges[0].node.content
          }}
        />
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData,
  graphql(MajorQuery, {
    options: ({ id }) => ({ variables: { name: id } })
  })
)(Major)
