import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import {
  AppBar,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import AppBarMenuItem from './AppBarMenuItem'
import AppBarSearch from './AppBarSearch'

class AppBarComponent extends PureComponent {
  static defaultProps = {
    classes: PropTypes.object.isRequired
  }

  render () {
    const { classes, toggleDrawer } = this.props

    return (
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
                    content="Degrees"
                    linkUrl="/academics/ug/majors"
                    asUrl="/page?type=academicsPages&id=majors"
                  />
                  <AppBarMenuItem
                    content="Admissions"
                    linkId="admissions"
                    toggleDrawer={toggleDrawer}
                  />
                  <AppBarMenuItem
                    content="Tuition & Aid"
                    linkUrl="/sfs/new/costs-and-fees"
                    asUrl="/page?type=sfsPages&id=costs-and-fees"
                  />
                  <AppBarMenuItem
                    content="About"
                    linkId="about"
                    toggleDrawer={toggleDrawer}
                  />
                  <AppBarSearch />
                </ul>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

const styles = theme => ({
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
    borderBottom: 'solid 3px #998643'
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
  col1: {
    display: 'flex',
    flexShrink: 0
  },
  col2: {
    flex: 1
  },
  menuList: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0
  }
})

export default withStyles(styles)(AppBarComponent)
