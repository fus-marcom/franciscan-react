import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'
import { getJSON } from '../utils/fetch'
import debounce from 'lodash.debounce'
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel
} from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

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
  searchResult: {
    margin: '16px 0'
  },
  title: {
    fontSize: '24px',
    fontWeight: 400,
    display: 'block'
  },
  type: {
    fontSize: '18px',
    fontWeight: 300,
    textTransform: 'uppercase'
  }
})

class Page extends Component {
  state = {
    data: [],
    searchTerm: '',
    sortBy: '',
    searchType: '',
    checkboxes: {
      department: false,
      major: false,
      faculty: false
    }
  }
  /**
   * Make api call based on searchTerm
   * Render cards from api data
   */
  fetchSearchTerm = () => {
    const searchType =
      this.state.searchType || '&type[]=department&type[]=major&type[]=faculty'
    const apiUrl = 'http://104.236.41.59/wp-json/wp/v2/'
    const params = `multiple-post-type?per_page=100&search=${this.state
      .searchTerm + searchType}`
    getJSON(apiUrl + params).then(data => this.setState({ data }))
    console.log(this.state.data)
  }

  // Get a new function that is debounced when called
  debouncedSearch = debounce(this.fetchSearchTerm, 700)

  /**
   * Called onSubmit event
   */
  formGetResults = e => {
    e.preventDefault()
    const { search } = e.target
    // unfocusing input makes soft keyboard to close
    window.outerWidth < 1024 && search.blur()
    // cancel any pending search
    this.debouncedSearch.cancel()
    this.fetchSearchTerm(search.value)
  }

  /**
   * Called onChange event
   */
  getSearchResults = e => {
    this.createSearchTypes()
    var { value } = e.target
    this.setState({ searchTerm: value })
    if (value.length < 3) return
    this.debouncedSearch()
  }

  sortBy = type => {
    if (this.state.data.length === 100 || this.state.data.length === 0) {
      this.setState({ sortBy: type })
      this.debouncedSearch()
    } else {
      const sortedData = this.state.data.sort()

      this.setState({ data: sortedData })
    }
  }

  filterByCategory = post => {
    if (this.state.category === 0) {
      return true
    } else if (post['resource-category'] !== undefined) {
      return post['resource-category'].some(
        category => category === this.state.category
      )
    } else {
      return false
    }
  }

  setCategory = catNum => {
    this.setState({ category: parseInt(catNum) })
  }

  handleChange = name => (event, checked) => {
    let checkboxes = this.state.checkboxes
    checkboxes[name] = checked
    this.setState({ checkboxes })
    this.createSearchTypes()
    this.debouncedSearch()
  }

  createSearchTypes = () => {
    let searchString = ''
    Object.entries(this.state.checkboxes).map(([key, value]) => {
      if (value) {
        searchString = searchString + `&type[]=${key}`
      }
    })
    this.setState({ searchType: searchString })
  }

  render () {
    const { classes } = this.props
    const { searchTerm } = this.state
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/page.css"
            type="text/css"
          />
        </Head>
        <div className={classes.contentContainer}>
          <form onSubmit={this.formGetResults}>
            <input
              id="search"
              name="search"
              onChange={this.getSearchResults}
              type="search"
              style={{ width: '100%', paddingLeft: '4px' }}
              value={searchTerm}
            />
            <label htmlFor="search">Search</label>
            <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </form>
          <FormControl component="fieldset">
            <FormLabel component="legend">Filter Results</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.faculty}
                    onChange={this.handleChange('faculty')}
                    value="faculty"
                  />
                }
                label="Faculty"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.department}
                    onChange={this.handleChange('department')}
                    value="department"
                  />
                }
                label="Department"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.major}
                    onChange={this.handleChange('major')}
                    value="major"
                  />
                }
                label="Major"
              />
            </FormGroup>
          </FormControl>
          {this.state.data.length > 0
            ? this.state.data.map(item => (
              <div key={item.id} className={classes.searchResult}>
                <span className={classes.type}>{item.type}</span>
                <span
                  className={classes.title}
                  dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
              </div>
            ))
            : null}
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(Page))
