import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import algoliasearch from 'algoliasearch/lite'
import Head from 'next/head'
import Router from 'next/router'
import React, { Component } from 'react'
import {
  InfiniteHits,
  InstantSearch,
  SearchBox,
  Stats
} from 'react-instantsearch-dom'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

const searchClient = algoliasearch(
  '5GFKHLOIX8',
  'aaaf8da6ce8c3b18926dd15895c961f1'
)

Router.onBeforeHistoryChange = url => {
  this.createBaseSearch()
  this.setState({ searchTerm: window.location.search.split('=')[1] })
  this.debouncedSearch()
}

class Search extends Component {
  state = {
    searchTerm: {
      query: 'admissions'
    }
  }
  componentDidMount () {
    this.setState({
      searchTerm: {
        query: window.location.search.split('=')[1] || 'admissions'
      }
    })
  }
  onSearchStateChange = searchState => {
    Router.push({
      pathname: '/search',
      query: { search: searchState.query }
    })

    this.setState({ searchTerm: searchState })
  }
  render () {
    const Hit = ({ hit }) => (
      <div key={hit.post_id} className={this.props.classes.searchResult}>
        <span className={this.props.classes.type}>
          {hit.post_type_label.replace(/-|pages/gi, ' ').trim()}
        </span>
        <a href={hit.search_url} className={this.props.classes.title}>
          {hit.post_title}
        </a>
      </div>
    )
    const { classes } = this.props
    return (
      <Layout>
        <Head>
          <title>Search | Franciscan University of Steubenville</title>
          <link
            rel="stylesheet"
            href="/static/styles/page.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/static/styles/search.css"
            type="text/css"
          />
        </Head>
        <div className={classes.contentContainer}>
          <InstantSearch
            indexName="wp_searchable_posts"
            searchClient={searchClient}
            searchState={this.state.searchTerm || { query: 'admissions' }}
            onSearchStateChange={this.onSearchStateChange}
          >
            <Grid container spacing={24}>
              <Grid item s={12}>
                <SearchBox autofocus={true} />
                <Stats />

                <InfiniteHits hitComponent={Hit} />
              </Grid>
              {/* TODO: Align these more precisely */}
              {/* <Grid item s={3} style={{ alignSelf: 'center', marginTop: 4 }}>
                <HierarchicalMenu
                  attributes={[
                    'post_type_label',
                    'taxonomies_hierarchical.faculty-departments.lvl0'
                  ]}
                  limit={50}
                  rootPath={null}
                  separator=" > "
                  showMore={false}
                  showMoreLimit={20}
                  showParentLevel
                /> */}
              {/* </Grid> */}
            </Grid>
          </InstantSearch>
        </div>
      </Layout>
    )
  }
}
const styles = theme => ({
  root: {
    '& br': {
      display: 'unset'
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
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  searchResult: {
    margin: '16px 0'
  },
  title: {
    fontSize: '24px',
    fontWeight: 400,
    display: 'block',
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, .87)'
  },
  type: {
    fontSize: '18px',
    fontWeight: 400,
    textTransform: 'uppercase',
    color: theme.palette.secondary.main
  }
})

export default withRoot(withStyles(styles)(Search))
