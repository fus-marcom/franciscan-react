import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import FloatingNav from '../components/FloatingNav'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'

const Entities = require('html-entities').XmlEntities
const entities = new Entities()

class Page extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }

  render () {
    const { classes } = this.props
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
            const title = entities.decode(
              data[this.props.type].edges[0].node.title
            )

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
                <Hidden mdDown>
                  {data[this.props.type].edges[0].node.menuSlugField.value && (
                    <FloatingNav
                      menuSlug={
                        data[this.props.type].edges[0].node.menuSlugField.value
                      }
                    />
                  )}
                </Hidden>
                <div className={classes.container}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  />
                  <Hidden lgUp>
                    {data[this.props.type].edges[0].node.menuSlugField
                      .value && (
                      <FloatingNav
                        menuSlug={
                          data[this.props.type].edges[0].node.menuSlugField
                            .value
                        }
                      />
                    )}
                  </Hidden>
                </div>
              </>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

const styles = theme => ({
  container: {
    maxWidth: '90%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '70%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '60%'
    }
  }
})

export default compose(withRoot, withData)(withStyles(styles)(Page))
