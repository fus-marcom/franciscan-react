import Head from 'next/head'
import React, { Component } from 'react'
import { Query, compose } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { ProfileQuery } from '../lib/queries/profile'
import withData from '../lib/withData'

class Faculty extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }

  render () {
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
            if (result.error) return <h3>{result.error}</h3>

            const imgRegex = /(<img.src=")(.+)(")(.+)(\/>)/gi

            const { data } = result
            const faculty = data[this.props.type].edges[0].node
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Details>/gi, '<div class="details">')
              .replace(/<\/Details>/gi, '</div>')
              .replace(
                imgRegex,
                '<img src="https://www.franciscan.edu/$2" $4 />'
              )

            const thumbnail = faculty.featuredImage.mediaDetails.sizes.find(
              image => image.name === 'thumbnail'
            ).sourceUrl
            const medium = faculty.featuredImage.mediaDetails.sizes.find(
              image => image.name === 'medium'
            ).sourceUrl

            const thumbnailW = faculty.featuredImage.mediaDetails.sizes.find(
              image => image.name === 'thumbnail'
            ).width
            const mediumW = faculty.featuredImage.mediaDetails.sizes.find(
              image => image.name === 'medium'
            ).width
            const imageW = faculty.featuredImage.mediaDetails.width

            return (
              <div>
                <h1>{faculty.displayNameField.value}</h1>
                <img
                  srcSet={`${thumbnail}  ${thumbnailW}w,
                        ${medium}  ${mediumW}w,
                        ${faculty.featuredImage.sourceUrl} ${imageW}w`}
                  sizes={`(max-width: 320px) 280px,
                        (max-width: 480px) 440px,
                        800px`}
                  src={faculty.featuredImage.sourceUrl}
                  alt="Elva dressed as a fairy"
                />
                <span>
                  {faculty.jobTitleField && faculty.jobTitleField.value}
                </span>
                <span>{faculty.emailField && faculty.emailField.value}</span>
                <span>{faculty.phoneField && faculty.phoneField.value}</span>
                <div
                  data-testid="content"
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

export default compose(withRoot, withData)(Faculty)
