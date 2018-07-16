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
            const faculty = data[this.props.type].edges

            const getImageData = (facultyMember, size) => {
              const {
                sourceUrl,
                width
              } = facultyMember.featuredImage.mediaDetails.sizes.find(
                ({ name }) => name === size
              )
              return {
                // remove end of url and append filename of image
                src:
                  facultyMember.featuredImage.sourceUrl.replace(
                    /(.*\/)[^/]+$/,
                    '$1'
                  ) + sourceUrl,
                width
              }
            }
            const getAllImageData = facultyMember =>
              ['thumbnail', 'medium']
                .map(s => getImageData(facultyMember, s))
                .concat({
                  src: facultyMember.featuredImage.sourceUrl,
                  width: facultyMember.featuredImage.mediaDetails.width
                })

            const getSrcSet = facultyMember =>
              getAllImageData(facultyMember)
                .map(image => `${image.src} ${image.width}w`)
                .join(',')

            return faculty.map(({ node: facultyMember }) => (
              <div className={classes.container} key={facultyMember.id}>
                <h1>{facultyMember.displayNameField.value}</h1>
                <Grid style={styles.listGridContainer} container spacing={24}>
                  {facultyMember.featuredImage && (
                    <Grid style={styles.listGridItem} item xs={12} sm={6}>
                      <img
                        srcSet={getSrcSet(facultyMember)}
                        sizes={`
                            (max-width: 320px) 280px,
                            (max-width: 480px) 440px,
                            800px
                          `}
                        alt={facultyMember.featuredImage.altText}
                      />
                    </Grid>
                  )}
                  <Grid style={styles.listGridItem} item xs={12} sm={6}>
                    {facultyMember.jobTitleField.value && (
                      <span className={classes.infoRow}>
                        {facultyMember.jobTitleField.value}
                      </span>
                    )}

                    {facultyMember.emailField.value && (
                      <span className={classes.infoRow}>
                        {facultyMember.emailField.value}
                      </span>
                    )}
                    {facultyMember.phoneField.value && (
                      <span className={classes.infoRow}>
                        {facultyMember.phoneField.value}
                      </span>
                    )}
                  </Grid>
                </Grid>
                <div
                  dangerouslySetInnerHTML={{
                    __html: facultyMember.content.replace(
                      imgRegex,
                      '<img src="https://storage.googleapis.com/fus-wp-storage/$2" $4 />'
                    )
                  }}
                />
                {facultyMember.cvField && (
                  <a href={facultyMember.cvField.value}>View CV</a>
                )}
              </div>
            ))
          }}
        </Query>
      </Layout>
    )
  }
}
const styles = theme => ({
  container: {
    maxWidth: '90%',
    margin: '0 auto 4rem',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '70%'
    },
    '&:last-child': {
      marginBottom: '1rem'
    }
  },
  infoRow: {
    display: 'block',
    fontSize: '20px',
    marginBottom: '8px'
  }
})

export default compose(
  withRoot,
  withData
)(withStyles(styles)(Faculty))
