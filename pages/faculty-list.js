import React, { Component } from 'react'
import { Query, compose } from 'react-apollo'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import Head from 'next/head'
import { FacultyListQuery } from '../lib/queries/facultyList'

class FacultyList extends Component {
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
              <div>
                {facultyData.map(faculty => (
                  <h3 key={faculty.node.slug}>{faculty.node.title}</h3>
                ))}
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(FacultyList)
