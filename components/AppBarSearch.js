import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Input, InputAdornment, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Close, Search } from '@material-ui/icons'

class AppBarSearch extends PureComponent {
  static defaultProps = {
    classes: PropTypes.object.isRequired
  }

  state = {
    isOpen: false,
    search: ''
  }

  onSearchClick = () => {
    this.state.isOpen ? this.onSearch() : this.setState({ isOpen: true })
  }

  onSearch = () => {
    if (this.state.search !== '') {
      window.location = `/search?search=${this.state.search}`
    }
  }

  onClose = () => this.setState({ isOpen: false })

  onChange = e => this.setState({ search: e.target.value })

  render () {
    const { classes } = this.props
    const { isOpen, search } = this.state

    return (
      <Fragment>
        <Search
          title="Search Franciscan"
          className={classes.icon}
          onClick={this.onSearchClick}
        />

        <Input
          value={search}
          placeholder="Search"
          onChange={this.onChange}
          onKeyPress={e => e.key === 'Enter' && this.onSearch()}
          className={isOpen ? classes.open : classes.closed}
          classes={{ underline: classes.underline }}
          endAdornment={
            <InputAdornment
              position="end"
              style={isOpen ? {} : { display: 'none' }}
            >
              <IconButton
                aria-label="Close search input"
                onClick={this.onClose}
              >
                <Close />
              </IconButton>
            </InputAdornment>
          }
        />
      </Fragment>
    )
  }
}

const styles = theme => ({
  icon: {
    cursor: 'pointer',
    fill: `${theme.palette.primary[500]}`,
    padding: '0 8px',
    marginBottom: '6px'
  },
  open: {
    transition: 'all .5s',
    width: '128px',
    marginBottom: '6px'
  },
  closed: {
    transition: 'all .5s',
    width: '0px',
    marginBottom: '6px'
  },
  underline: {
    '&:after': {
      backgroundColor: '#998643'
    }
  }
})

export default withStyles(styles)(AppBarSearch)
