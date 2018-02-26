import React, { Component } from 'react'
import { Query, compose } from 'react-apollo'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

class Major extends Component {
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
            if (result.error) return <h3>{result.error}</h3>

            const { data } = result
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Title>/g, '<h2 class="title">')
              .replace(/<\/Title>/g, '</h2>')
              .replace(/src="\//g, 'src="https://www.franciscan.edu/')
            global.x = content

            return (
              <div
                data-testid="content"
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(Major)
