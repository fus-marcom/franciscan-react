import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { AssociateQuery } from '../lib/queries/associate'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

class Associate extends Component {
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
            __html: data.associatePrograms.edges[0].node.content
          }}
        />
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData,
  graphql(AssociateQuery, {
    options: ({ id }) => ({ variables: { name: id } })
  })
)(Associate)
