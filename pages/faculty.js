import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { SampleQuery } from '../lib/queries/posts'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

class Faculty extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }
  render () {
    const { data } = this.props
    return (
      <Layout>
        <h1>hello</h1>
        <pre>{JSON.stringify(data.faculty, null, 2)}</pre>
      </Layout>
    )
  }
}

export default compose(
  withRoot,
  withData,
  graphql(SampleQuery, {
    options: ({ id }) => ({ variables: { name: id } })
  })
)(Faculty)
