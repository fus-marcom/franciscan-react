import Head from 'next/head'
import React, { Component } from 'react'
import { Query, compose } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { ProfileQuery } from '../lib/queries/profile'
import withData from '../lib/withData'

class Faculty extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }

  render () {
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/faculty.css"
            type="text/css"
          />
        </Head>
        <Query
          query={ProfileQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{result.error}</h3>

            const cvRegex = /(<cvlink>)(<a.href=")(.+)(">)(.+)(<\/a>)(<.cvlink>)/gi

            const { data } = result
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Details>/g, '<div class="details">')
              .replace(/<\/Details>/g, '</div>')
              .replace(/src="\//g, 'src="https://www.franciscan.edu/')
              .replace(
                cvRegex,
                '<CVLink><a href="$3" title="View CV">View CV</a></CVLink>'
              )

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

export default compose(withRoot, withData)(Faculty)
