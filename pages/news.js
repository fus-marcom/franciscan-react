import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'

class News extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }
  render () {
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/news.css"
            type="text/css"
          />
        </Head>
        <Query
          query={PageQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const { data } = result
            const title = data[this.props.type].edges[0].node.title
            const content = data[this.props.type].edges[0].node.content.replace(
              /src="\//g,
              'src="https://storage.googleapis.com/fus-wp-storage/'
            )

            return (
              <div className="content-container">
                <Typography
                  variant="headline"
                  component="h2"
                  dangerouslySetInnerHTML={{
                    __html: title
                  }}
                />
                <div
                  data-testid="content"
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(News)
