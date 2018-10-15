import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import AlumniCard from '../components/AlumniCard'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import withData from '../lib/withData'

import gql from 'graphql-tag'

class FacultyList extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }
  render () {
    const { classes } = this.props
    const alumniQuery = gql`
      {
        alumniOutcomes(last: 100, where: { orderby: { field: SLUG } }) {
          edges {
            node {
              title
              slug
              content
              featuredImage {
                sourceUrl
                altText
                mediaDetails {
                  sizes {
                    name
                    sourceUrl
                  }
                }
              }
              displayNameField {
                value
              }
            }
          }
        }
      }
    `
    return (
      <Layout>
        <Query query={alumniQuery} variables={{ name: this.props.id }}>
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const { data } = result
            const alumniData = data.alumniOutcomes.edges

            return (
              <Grid
                container
                className={classes.contentContainer}
                justify="center"
                spacing={16}
              >
                {alumniData.map(alumni => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={alumni.node.slug}
                  >
                    <AlumniCard
                      profileName={alumni.node.displayNameField.value}
                      profileLink={`/alumni-outcomes/${alumni.node.slug}`}
                      imageObj={alumni.node.featuredImage}
                      content={alumni.node.content}
                    />
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
    maxWidth: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  }
})

export default compose(withRoot, withData)(withStyles(styles)(FacultyList))
