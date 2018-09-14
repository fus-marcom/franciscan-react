import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import FloatingNav from '../components/FloatingNav'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'

class Page extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }

  render () {
    return (
      <Layout>
        <Query
          query={PageQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const imgRegex = /(<img.src=")(.+)(")(.+)(\/>)/gi
            const { data } = result
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Title>/g, '<h2 class="title">')
              .replace(/<\/Title>/g, '</h2>')
              .replace(
                imgRegex,
                '<img src="https://storage.googleapis.com/fus-wp-storage/$2" $4 />'
              )
            const title = data[this.props.type].edges[0].node.title

            return (
              <>
                <Head>
                  <title
                  >{`${title} | Franciscan University of Steubenville`}</title>
                  <link
                    rel="stylesheet"
                    href="/static/styles/department.css"
                    type="text/css"
                  />
                </Head>
                {data[this.props.type].edges[0].node.menuSlugField &&
                  data[this.props.type].edges[0].node.menuSlugField.value(
                    <FloatingNav
                      menuSlug={
                        data[this.props.type].edges[0].node.menuSlugField.value
                      }
                    />
                  )}

                <div
                  data-testid="content"
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
              </>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(Page)
