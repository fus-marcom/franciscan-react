import React from 'react'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

class Faculty extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <Layout>
        <h1>My {this.props.id} blog post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Layout>
    )
  }
}

export default withRoot(Faculty)
