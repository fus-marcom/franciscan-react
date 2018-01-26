import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { DepartmentQuery } from '../lib/queries/department'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

class Department extends Component {
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
        <h2 style={{ textTransform: 'capitalize' }}>
          {data.departments.edges[0].node.slug} Department
        </h2>
        <div
          data-testid="content"
          dangerouslySetInnerHTML={{
            __html: data.departments.edges[0].node.content
          }}
        />
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData,
  graphql(DepartmentQuery, {
    options: ({ id }) => ({ variables: { name: id } })
  })
)(Department)
