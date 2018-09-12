import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import gql from 'graphql-tag'
import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import withData from '../lib/withData'

const GET_EVENTS = gql`
  {
    events {
      edges {
        node {
          slug
          title
          excerpt
          featuredImage {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

class EventList extends Component {
  render () {
    const { classes } = this.props
    const decodeHTML = str =>
      str.replace(/&#(\d+);/g, (_, p1) => String.fromCharCode(p1))
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/faculty-list.css"
            type="text/css"
          />
        </Head>
        <Query query={GET_EVENTS}>
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const { data } = result
            const eventsData = data.events.edges

            return (
              <Grid
                container
                className={classes.contentContainer}
                justify="center"
                spacing={16}
              >
                {eventsData.map(event => (
                  <Grid
                    item
                    xs={12}
                    className={classes.card}
                    key={event.node.slug}
                  >
                    <Grid container>
                      <Hidden smUp>
                        <Grid item xs={12}>
                          {event.node.featuredImage && (
                            <div className={classes.portraitWrapper}>
                              <img
                                src={event.node.featuredImage.sourceUrl}
                                alt={event.node.featuredImage.altText}
                                className={classes.portrait}
                              />
                            </div>
                          )}
                        </Grid>
                      </Hidden>
                      <Grid
                        item
                        xs={12}
                        sm={9}
                        style={{ paddingRight: '16px' }}
                      >
                        <Typography
                          variant="headline"
                          component="h2"
                          className={classes.name}
                        >
                          {decodeHTML(event.node.title)}
                        </Typography>
                        {event.node.excerpt && (
                          <Typography
                            component="span"
                            dangerouslySetInnerHTML={{
                              __html: event.node.excerpt
                            }}
                          />
                        )}
                        {event.node.slug && (
                          <Link prefetch href={`/events/${event.node.slug}`}>
                            <Button size="small" color="primary">
                              Learn More
                            </Button>
                          </Link>
                        )}
                      </Grid>
                      <Hidden xsDown>
                        <Grid item xs={3}>
                          {event.node.featuredImage && (
                            <div className={classes.portraitWrapper}>
                              <img
                                src={event.node.featuredImage.sourceUrl}
                                alt={event.node.featuredImage.altText}
                                className={classes.portrait}
                              />
                            </div>
                          )}
                        </Grid>
                      </Hidden>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

const styles = theme => ({
  gridItemFix: {
    width: '100%',
    margin: '0',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
    }
  },
  contentContainer: {
    width: '100%',
    maxWidth: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  },
  portrait: {
    width: '100%',
    maxWidth: '250px'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actions: {
    marginTop: 'auto',
    paddingLeft: '0'
  }
})

export default compose(withRoot, withData)(withStyles(styles)(EventList))
