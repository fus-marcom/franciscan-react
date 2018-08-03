import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import SampleSchedule from '../components/SampleSchedule'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'

const styles = {
  root: {
    '& br': {
      display: 'unset'
    }
  }
}

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
            href="/static/styles/major.css"
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
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Title>/g, '<h2 class="title">')
              .replace(/<\/Title>/g, '</h2>')
              .replace(
                /src="\//g,
                'src="https://storage.googleapis.com/fus-wp-storage/'
              )

            return (
              <div>
                <div
                  className={this.props.classes.root}
                  data-testid="content"
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
                <SampleSchedule />
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(withStyles(styles)(Major))
