import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { NewsQuery } from '../lib/queries/news'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'
import Typography from 'material-ui/Typography'

class News extends Component {
  static async getInitialProps ({ query: { id } }) {
    return { id }
  }
  render () {
    const { data } = this.props
    const loading = data.loading
    // @todo create HOC
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
        <Typography
          type="headline"
          component="h2"
          dangerouslySetInnerHTML={{
            __html: data.news.edges[0].node.title
          }}
        />

        <div
          data-testid="content"
          dangerouslySetInnerHTML={{
            __html: data.news.edges[0].node.content
          }}
        />
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData,
  graphql(NewsQuery, {
    options: ({ id }) => ({ variables: { name: id } })
  })
)(News)
