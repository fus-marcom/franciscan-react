import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { ProfileQuery } from '../lib/queries/profile'
import withData from '../lib/withData'

class Faculty extends Component {
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
          query={ProfileQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{JSON.stringify(result.error)}</h3>

            const imgRegex = /(<img.src=")(.+)(")(.+)(\/>)/gi

            const { data } = result
            const faculty = data[this.props.type].edges[0].node
            const content = data[this.props.type].edges[0].node.content.replace(
              imgRegex,
              '<img src="https://www.franciscan.edu/$2" $4 />'
            )

            // const thumbnail =
            //   faculty.featuredImage &&
            //   faculty.featuredImage.mediaDetails.sizes.find(
            //     image => image.name === 'thumbnail'
            //   ).sourceUrl
            // const medium =
            //   faculty.featuredImage &&
            //   faculty.featuredImage.mediaDetails.sizes.find(
            //     image => image.name === 'medium'
            //   ).sourceUrl

            // const thumbnailW =
            //   faculty.featuredImage &&
            //   faculty.featuredImage.mediaDetails.sizes.find(
            //     image => image.name === 'thumbnail'
            //   ).width
            // const mediumW =
            //   faculty.featuredImage &&
            //   faculty.featuredImage.mediaDetails.sizes.find(
            //     image => image.name === 'medium'
            //   ).width
            // const imageW =
            // faculty.featuredImage && faculty.featuredImage.mediaDetails.width

            return (
              <div className={classes.container}>
                <h1>{faculty.displayNameField.value}</h1>
                <Grid style={styles.listGridContainer} container spacing={24}>
                  {faculty.featuredImage && (
                    <Grid style={styles.listGridItem} item xs={12} sm={6}>
                      <img
                        // srcSet={`${thumbnail}  ${thumbnailW}w,
                        // ${medium}  ${mediumW}w,
                        // ${faculty.featuredImage.sourceUrl} ${imageW}w`}
                        // sizes={`(max-width: 320px) 280px,
                        // (max-width: 480px) 440px,
                        // 800px`}
                        src={faculty.featuredImage.sourceUrl}
                        alt={faculty.featuredImage.altText}
                      />
                    </Grid>
                  )}
                  <Grid style={styles.listGridItem} item xs={12} sm={6}>
                    {faculty.jobTitleField.value && (
                      <span className={classes.infoRow}>
                        {faculty.jobTitleField.value}
                      </span>
                    )}

                    {faculty.emailField.value && (
                      <span className={classes.infoRow}>
                        {faculty.emailField.value}
                      </span>
                    )}
                    {faculty.phoneField.value && (
                      <span className={classes.infoRow}>
                        {faculty.phoneField.value}
                      </span>
                    )}
                  </Grid>
                </Grid>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
                {faculty.cvField && <a href={faculty.cvField.value}>View CV</a>}
              </div>
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
    }
  },
  infoRow: {
    display: 'block',
    fontSize: '20px',
    marginBottom: '8px'
  }
})

export default compose(withRoot, withData)(withStyles(styles)(Faculty))
