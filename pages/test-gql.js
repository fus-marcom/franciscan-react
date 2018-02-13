import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { DepartmentQuery } from '../lib/queries/department'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

class Test extends Component {
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
        <div
          dangerouslySetInnerHTML={{
            __html: data.faculty.edges[0].node.content
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
    options: ({ match }) => ({ variables: { name: 'haenni-eric' } })
  })
)(Test)
