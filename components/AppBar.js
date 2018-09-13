import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Close from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AppBarMenuItem from './AppBarMenuItem'

class ButtonAppBar extends Component {
  static defaultProps = {
    classes: PropTypes.object.isRequired
  }
  state = {
    isSearchOpen: false,
    searchText: ''
  }
  onSearchClick = () => {
    this.state.isSearchOpen
      ? this.handleSearch()
      : this.setState({ isSearchOpen: true })
  }

  closeInput = () => {
    this.setState({ isSearchOpen: false })
  }

  handleSearch = () => {
    if (this.state.search !== '') {
      Router.push({
        pathname: '/search',
        query: { search: this.state.search }
      })
    }
  }

  onSeachChange = e => this.setState({ searchText: e.target.value })

  render () {
    const { classes, toggleDrawer } = this.props
    const { isSearchOpen, searchText } = this.state
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <div className={classes.col1}>
              <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                title="Menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                component="span"
                className={classes.flex}
              >
                <Link href="/">
                  <a>
                    <Hidden mdUp>
                      <img
                        className={classes.mobileHeaderImage}
                        src="https://storage.googleapis.com/fus-wp-storage/img/fus-logo.svg"
                        alt="Logo of Franciscan University of Steubenville"
                      />
                    </Hidden>
                    <Hidden smDown>
                      <img
                        className={classes.headerImage}
                        src="https://storage.googleapis.com/fus-wp-storage/img/franciscan-logo.svg"
                        alt="Logo of Franciscan University of Steubenville"
                      />
                    </Hidden>
                  </a>
                </Link>
              </Typography>
            </div>

            <Grid
              container
              className={`${classes.col2} ${classes.mobileGridContainer}`}
            >
              <Grid item xs={12} className={classes.telContainer}>
                <a href="tel:18007836220" className={classes.telLink}>
                  1.800.783.6220
                </a>
              </Grid>
              <Hidden smDown>
                <Grid item xs={12} style={{ paddingTop: 0 }}>
                  <ul className={classes.menuList}>
                    <AppBarMenuItem
                      linkUrl="/academics/ug/majors"
                      content="Degrees"
                      asUrl="/page?type=academicsPages&id=majors"
                    />
                    <AppBarMenuItem
                      toggleDrawer={toggleDrawer}
                      linkId="admissions"
                      content="Admissions"
                    />
                    <AppBarMenuItem
                      content="Tuition & Aid"
                      linkUrl="/sfs/new/costs-and-fees"
                      asUrl="/page?type=sfsPages&id=costs-and-fees"
                    />
                    <AppBarMenuItem
                      toggleDrawer={toggleDrawer}
                      linkId="about"
                      content="About"
                    />
                    <SvgIcon
                      viewBox="0 0 24 24"
                      className={classes.searchSVG}
                      onClick={this.onSearchClick}
                    >
                      <title>Search Franciscan</title>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                      />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </SvgIcon>

                    <Input
                      className={
                        isSearchOpen ? classes.searchOpen : classes.searchClosed
                      }
                      placeholder="Search"
                      classes={{ underline: classes.searchInput }}
                      inputRef={inp => {
                        this.searchInput = inp
                      }}
                      value={searchText}
                      onChange={this.onSeachChange}
                      onKeyPress={e => e.key === 'Enter' && this.handleSearch()}
                      endAdornment={
                        <InputAdornment
                          style={isSearchOpen ? {} : { display: 'none' }}
                          position="end"
                        >
                          <IconButton
                            aria-label="Close search input"
                            onClick={this.closeInput}
                          >
                            <Close />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </ul>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)'
    }
  },
  appBar: {
    background: '#ffffff',
    borderBottom: `solid 3px #998643`
  },
  toolbar: {
    minHeight: '72px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '80px'
    }
  },
  menuButton: {
    color: `${theme.palette.primary[500]}`,
    marginLeft: -12,
    marginRight: 10,
    alignSelf: 'center'
  },
  mobileHeaderImage: {
    maxHeight: '3rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '13px'
    }
  },
  headerImage: {
    maxHeight: '3rem',
    [theme.breakpoints.up('lg')]: {
      maxHeight: '80px'
    }
  },
  mobileGridContainer: {
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'flex-start',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)'
    }
  },
  telContainer: {
    textAlign: 'right',
    marginBottom: '8px',
    marginTop: '8px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: '4px'
    }
  },
  telLink: {
    padding: '8px',
    margin: '8px',
    fontSize: '18px'
  },
  searchSVG: {
    cursor: 'pointer',
    fill: `${theme.palette.primary[500]}`,
    paddingBottom: '6px'
  },
  invertedBtn: {
    color: '#21412a',
    backgroundColor: 'transparent',
    border: '2px #21412a solid',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#21412a',
      color: 'white'
    }
  },
  listStyles: {
    display: 'flex',
    margin: 0
  },
  listLi: {
    margin: '0 8px'
  },
  col1: {
    display: 'flex'
  },
  col2: {
    flex: 1
  },
  col2Top: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  menuList: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0
  },
  ulLink: {
    textDecoration: 'none',
    paddingBottom: '6px'
  },
  searchOpen: {
    transition: 'all .5s',
    width: '128px',
    marginBottom: '6px'
  },
  searchClosed: {
    transition: 'all .5s',
    width: '0px',
    marginBottom: '6px'
  },
  searchInput: {
    '&:after': {
      backgroundColor: '#998643'
    }
  }
})

export default withStyles(styles)(ButtonAppBar)
