import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import Head from 'next/head'
import React, { Component } from 'react'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import { getJSON } from '../utils/fetch'
import LinearProgress from '@material-ui/core/LinearProgress'

class Page extends Component {
  state = {
    data: [],
    searchTerm: '',
    sortBy: 'alphaAsc',
    searchType: '',
    checkboxes: {
      department: false,
      major: false,
      faculty: false,
      news: false,
      event: false
    },
    scrollY: 0,
    windowHeight: 0,
    scrollSearch: false,
    resultCount: 0,
    open: false,
    baseSearchString: '',
    loading: false
  }

  createBaseSearch = () => {
    let searchString = ''
    postTypes.map(type => {
      searchString = searchString + `&type[]=${type}`
    })
    this.setState({ baseSearchString: searchString })
  }
  /**
   * Make api call based on searchTerm
   * Render cards from api data
   */
  fetchSearchTerm = () => {
    this.setState({ loading: true })
    const searchType = this.state.searchType || this.state.baseSearchString
    const apiUrl = 'https://wp.franciscan.university/wp-json/wp/v2/'
    const params = `multiple-post-type?per_page=100&search=${this.state
      .searchTerm + searchType}`
    getJSON(apiUrl + params).then(data =>
      this.setState({ data: data, loading: false })
    )
  }

  // Get a new function that is debounced when called
  debouncedSearch = debounce(this.fetchSearchTerm, 300)

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

  // sortBy = type => {
  //   // this.setState({ sortBy: type })
  //   if (this.state.data.length === 100 || this.state.data.length === 0) {
  //     this.debouncedSearch()
  //   } else {
  //     let sortedData = this.state.data
  //     sortedData.sort((a, b) => {
  //       switch (type) {
  //         case 'alphaAsc':
  //           console.log(type)
  //           return a.title.rendered - b.title.rendered
  //         case 'dateOldest':
  //           console.log(type)
  //           return Date.parse(a.date) - Date.parse(b.date)
  //         case 'dateNewest':
  //           console.log(type)
  //           return Date.parse(b.date) - Date.parse(a.date)
  //         default:
  //           console.log(type)
  //           return b.title.rendered - a.title.rendered
  //       }
  //     })
  //     console.log(sortedData)
  //     this.setState({ data: sortedData })
  //   }
  // }

  // TODO: Only search if the search input value is not empty
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
    this.setState(
      prevState => {
        return {
          checkboxes: {
            ...prevState.checkboxes,
            [name]: checked
          }
        }
      },
      () => {
        this.createSearchTypes()
        this.debouncedSearch()
      }
    )
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

  handleSort = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.throttleScroll)
    this.createBaseSearch()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.throttleScroll)
  }

  handleScroll = () => {
    this.setState(
      { scrollY: window.scrollY, windowHeight: window.innerHeight },
      () => {
        if (this.state.scrollY > this.state.windowHeight - 500) {
          // TODO: if scroll is close to bottom then search
          console.log('scroll')
        }
      }
    )
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  throttleScroll = throttle(this.handleScroll, 200)

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
          <Grid container spacing={24}>
            <Grid item xs={9}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  value={searchTerm}
                  onChange={this.getSearchResults}
                />
              </FormControl>
            </Grid>
            {/* TODO: Align these more precisely */}
            <Grid item xs={3} style={{ alignSelf: 'center', marginTop: 4 }}>
              <FormControl className={classes.formControl}>
                <FormHelperText>Sort By</FormHelperText>
                <Select
                  value={this.state.sortBy}
                  onChange={this.handleSort}
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  inputProps={{
                    name: 'sortBy'
                  }}
                >
                  <MenuItem value={'alphaAsc'}>a-z</MenuItem>
                  <MenuItem value={'alphaDesc'}>z-a</MenuItem>
                  <MenuItem value={'dateOldest'}>old-new</MenuItem>
                  <MenuItem value={'dateNewest'}>new-old</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={9}>
              {this.state.loading && <LinearProgress />}
              {this.state.data.length > 0
                ? this.state.data
                  .sort((a, b) => {
                    switch (this.state.sortBy) {
                      case 'alphaAsc':
                        return a.title.rendered.toLowerCase() <
                            b.title.rendered.toLowerCase()
                          ? -1
                          : 1
                      case 'dateOldest':
                        return Date.parse(a.date) - Date.parse(b.date)
                      case 'dateNewest':
                        return Date.parse(b.date) - Date.parse(a.date)
                      default:
                        return b.title.rendered.toLowerCase() <
                            a.title.rendered.toLowerCase()
                          ? -1
                          : 1
                    }
                  })
                  .filter(item => item.acf.search_url !== null)
                  .map(item => (
                    <div key={item.id} className={classes.searchResult}>
                      <span className={classes.type}>{item.type}</span>
                      <a
                        href={item.acf.search_url}
                        className={classes.title}
                        dangerouslySetInnerHTML={{
                          __html: item.title.rendered
                        }}
                      />
                    </div>
                  ))
                : null}
            </Grid>
            <Grid item xs={3}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Filter Results</FormLabel>
                <FormGroup>
                  {Object.entries(this.state.checkboxes).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      style={{ textTransform: 'capitalize' }}
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state[key]}
                          onChange={this.handleChange(key)}
                          value={key}
                        />
                      }
                      label={key}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
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

const postTypes = [
  'department',
  'major',
  'faculty',
  'directory',
  'news',
  'human-resource',
  'campus-security',
  'associate-program',
  'minor',
  'institute',
  'staff',
  'event',
  'about-page',
  'fms-page',
  'chapel-page',
  'academics-page',
  'admissions-page',
  'sfs-page',
  'austria-page',
  'student-life-page',
  'its-page',
  'fish-page',
  'fiwh-page',
  'pdp-page',
  'press-page',
  'veritas-page',
  'bioethics-page',
  'pilgrimages-page',
  'households-page',
  'student-profile-page',
  'missions-page',
  'job',
  'alumni-outcome',
  'theatre-page',
  'graduate-program',
  'sass-page'
]

export default withRoot(withStyles(styles)(Page))
