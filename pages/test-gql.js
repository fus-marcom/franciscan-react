import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { SampleQuery } from '../lib/queries/posts'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

class Test extends Component {
  render () {
    const { data } = this.props
    const loading = data.loading
    if (loading) return
    return (
      <Layout>
        <h1>{data.Post.title}</h1>
      </Layout>
    )
  }
}

export default compose(withRoot, withData, graphql(SampleQuery))(Test)
