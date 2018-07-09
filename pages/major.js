import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { Component } from 'react'
import { compose, Query } from 'react-apollo'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { PageQuery } from '../lib/queries/page'
import withData from '../lib/withData'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    '& br': {
      display: 'unset'
    }
  }
}

class Major extends Component {
  static async getInitialProps ({ query: { id, type } }) {
    return { id, type }
  }
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render () {
    const { value } = this.state
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/major.css"
            type="text/css"
          />
        </Head>
        <Query
          query={PageQuery(this.props.type)}
          variables={{ name: this.props.id }}
        >
          {result => {
            if (result.loading) {
              return <h1>Loading</h1>
            }
            if (result.error) return <h3>{result.error}</h3>

            const { data } = result
            const content = data[this.props.type].edges[0].node.content
              .replace(/<Title>/g, '<h2 class="title">')
              .replace(/<\/Title>/g, '</h2>')
              .replace(/src="\//g, 'src="https://www.franciscan.edu/')

            return (
              <div>
                <div
                  className={this.props.classes.root}
                  data-testid="content"
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollable
                  scrollButtons="auto"
                >
                  <Tab label="Year One" />
                  <Tab label="Year Two" />
                  <Tab label="Year Three" />
                  <Tab label="Year Four" />
                </Tabs>
                {value === 0 && (
                  <div>
                    <Grid container spacing={24}>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                          <li>Class 1</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {value === 1 && <div>Item Two</div>}
                {value === 2 && <div>Item Three</div>}
                {value === 3 && <div>Item Four</div>}
              </div>
            )
          }}
        </Query>
        {/* <Link
          prefetch
          as={`/${this.props.id}/classes`}
          href={`/major?type=majors&id=${this.props.id}-classes`}
        >
          Course Descriptions
        </Link> */}
      </Layout>
    )
  }
}

export default compose(withRoot, withData)(withStyles(styles)(Major))
