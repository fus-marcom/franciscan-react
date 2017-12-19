import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { SampleQuery } from '../lib/queries/posts'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import Head from 'next/head'
import Grid from 'material-ui/Grid'

class Faculty extends Component {
  static async getInitialProps ({ query: { id } }) {
    console.log(id)
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

    const content = data.faculty.edges[0].node.content.replace('<Details', '<div class="details"').replace('</Details', '</div')

    return (
      <Layout>
        <Head>
          <link rel='stylesheet' href='/static/styles/faculty.css' type='text/css' />
        </Head>
        <Grid container>
          <Grid item xs={12}>
            <div
              data-testid="content"
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />
          </Grid>
        </Grid>
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
