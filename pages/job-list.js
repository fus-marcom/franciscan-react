import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { JobListQuery } from '../lib/queries/jobList'
import withData from '../lib/withData'

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
  },

  link: {
    cursor: 'pointer'
  }
})

class JobList extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }

  state = {
    jobType: 'faculty'
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
          <link
            rel="stylesheet"
            href="/static/styles/faculty-list.css"
            type="text/css"
          />
        </Head>
        <Query
          query={JobListQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const { data } = result
            const jobsData = data.jobs.edges

            return (
              <div className={classes.contentContainer}>
                <h1>Career Opportunities</h1>
                {jobsData.map(job => {
                  const category =
                    job.node.jobCategories.edges.length > 0
                      ? job.node.jobCategories.edges[0].node.slug
                      : false
                  const facultyDepartment =
                    job.node.facultyDepartments.edges.length > 0
                      ? job.node.facultyDepartments.edges[0].node.name
                      : false
                  const staffDepartment =
                    job.node.staffDepartments.edges.length > 0
                      ? job.node.staffDepartments.edges[0].node.name
                      : false

                  return (
                    <Grid
                      key={job.node.slug}
                      item
                      className={classes.gridItemFix}
                      xs={12}
                    >
                      {category && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: category.toUpperCase()
                          }}
                        />
                      )}
                      {facultyDepartment && (
                        <span>
                          {' '}
                          {'> '}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: facultyDepartment.toUpperCase()
                            }}
                          />
                        </span>
                      )}
                      {staffDepartment && (
                        <span>
                          {'> '}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: staffDepartment.toUpperCase()
                            }}
                          />
                        </span>
                      )}
                      <Link prefetch href={`/careers/${job.node.slug}`}>
                        <h2
                          className={classes.link}
                          dangerouslySetInnerHTML={{
                            __html: job.node.title
                          }}
                        />
                      </Link>
                    </Grid>
                  )
                })}
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(withStyles(styles)(JobList))
