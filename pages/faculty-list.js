import React, { Component } from 'react'
import { Query, compose } from 'react-apollo'
import withData from '../lib/withData'
import { withStyles } from 'material-ui/styles'
import Layout from '../components/Layout'
import FacultyListItem from '../components/FacultyListItem'
import withRoot from '../components/withRoot'
import Head from 'next/head'
import { FacultyListQuery } from '../lib/queries/facultyList'
import Masonry from 'react-masonry-component'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  gridItemFix: {
    width: '100%',
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

class FacultyList extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }
  render () {
    const { classes } = this.props
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
          query={FacultyListQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{result.error}</h3>

            const { data } = result
            const facultyData =
              data['facultyDepartments'].edges[0].node.faculty.edges

            return (
              <div className={classes.contentContainer}>
                <Masonry>
                  {facultyData.map(faculty => (
                    <Grid
                      key={faculty.node.slug}
                      item
                      className={classes.gridItemFix}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                    >
                      <FacultyListItem
                        profileName={faculty.node.title}
                        profileLink={`/faculty/${faculty.node.slug}`}
                        content={faculty.node.content}
                      />
                    </Grid>
                  ))}
                </Masonry>
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(withStyles(styles)(FacultyList))
