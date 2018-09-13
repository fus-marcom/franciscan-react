import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'
import FloatingNav from '../components/FloatingNav'
import { getJSON } from '../utils/fetch'

class Page extends Component {
  static async getInitialProps ({ query: { id, type, restId } }) {
    return { id, type, restId }
  }

  state = {
    data: null,
    loading: true
  }
  componentDidMount () {
    const apiUrl = 'https://wp.franciscan.university/wp-json/wp/v2/'
    const params = `${this.props.restId}?slug=${this.props.id}`
    getJSON(apiUrl + params).then(data =>
      this.setState({ data: data, loading: false })
    )
  }

  render () {
    const { loading } = this.state
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
                {!loading &&
                  this.state.data.length > 0 && (
                  <FloatingNav
                    menuSlug={this.state.data[0].acf.menu.post_name}
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
