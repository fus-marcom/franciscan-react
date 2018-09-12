import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import StaffListItem from '../components/StaffListItem'
import withRoot from '../components/withRoot'
import { StaffListQuery } from '../lib/queries/staffList'
import withData from '../lib/withData'

class StaffList extends Component {
  render () {
    const { classes } = this.props
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/faculty-list.css"
            type="text/css"
          />
        </Head>
        <Query query={StaffListQuery()} variables={{ name: 'admissions' }}>
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const { data } = result
            const staffData =
              data['staffDepartments'].edges[0].node.staffMembers.edges

            return (
              <Grid
                container
                className={classes.contentContainer}
                justify="center"
                spacing={16}
              >
                {staffData.map(staff => (
                  <StaffListItem
                    key={staff.node.slug}
                    profileName={staff.node.displayNameField.value}
                    profileLink={`/admissions/staff/${staff.node.slug}`}
                    jobTitle={staff.node.jobTitleField.value}
                    imageObj={staff.node.featuredImage}
                    content={staff.node.content}
                    phone={staff.node.phoneField.value}
                  />
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
  }
})

export default compose(withRoot, withData)(withStyles(styles)(StaffList))
