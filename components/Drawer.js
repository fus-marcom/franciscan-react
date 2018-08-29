import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import SearchIcon from '@material-ui/icons/Search'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  aboutMenu,
  academicsMenu,
  admissionsMenu,
  faithMenu,
  studentMenu
} from '../data/drawerMenu'
import DrawerItem from './DrawerItem'

class TemporaryDrawer extends Component {
  static defaultProps = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
  }
  state = {
    openItems: true,
    search: ''
  }

  handleClick = () => {
    this.setState({ openItems: !this.state.openItems })
  }

  handleSearchChange = e => {
    this.setState({ search: e.target.value })
  }

  handleSearch = () => {
    if (this.state.search !== '') {
      Router.push({
        pathname: '/search',
        query: { search: this.state.search }
      })
    }
  }

  render () {
    const { classes, toggleDrawer, open } = this.props
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    return (
      <SwipeableDrawer
        open={open}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        style={{ visibility: `${open ? 'visible' : 'hidden'}` }}
      >
        <div tabIndex={0} role="button">
          <div className={classes.list}>
            <List>
              <ListItem>
                <Link href={'/'}>
                  <img
                    className={classes.drawerImg}
                    width="200"
                    src="https://storage.googleapis.com/fus-wp-storage/img/fus-logo.svg"
                    alt="logo"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <Input
                    id="search"
                    variant="text"
                    classes={{
                      underline: classes.inputInkbar
                    }}
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                    onKeyPress={e => e.key === 'Enter' && this.handleSearch()}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleSearch}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </ListItem>
              <DrawerItem
                toggleDrawer={toggleDrawer}
                primaryText="About"
                submenuItems={aboutMenu}
                isSubOpen={this.props.drawerSubItems}
                isOpen={this.props.drawerItems.about}
                expandSubItem={this.props.expandSubItem}
                expandItem={this.props.expandItem}
                itemId="about"
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                primaryText="Academics"
                submenuItems={academicsMenu}
                isSubOpen={this.props.drawerSubItems}
                isOpen={this.props.drawerItems.academics}
                expandSubItem={this.props.expandSubItem}
                expandItem={this.props.expandItem}
                itemId="academics"
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={this.props.expandSubItem}
                expandItem={this.props.expandItem}
                itemId="admissions"
                primaryText="Admissions"
                submenuItems={admissionsMenu}
                isSubOpen={this.props.drawerSubItems}
                isOpen={this.props.drawerItems.admissions}
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={this.props.expandSubItem}
                expandItem={this.props.expandItem}
                itemId="evangelization"
                primaryText="Evangelization"
                submenuItems={faithMenu}
                isSubOpen={this.props.drawerSubItems}
                isOpen={this.props.drawerItems.evangelization}
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={this.props.expandSubItem}
                expandItem={this.props.expandItem}
                itemId="student-life"
                primaryText="Student Life"
                submenuItems={studentMenu}
                isSubOpen={this.props.drawerSubItems}
                isOpen={this.props.drawerItems['student-life']}
              />
              <Divider />
              <a
                className={classes.externalLink}
                href="https://accessfus.franciscan.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'AccessFUS'} />
                </ListItem>
              </a>
              <a
                className={classes.externalLink}
                href="http://alumni.franciscan.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Alumni'} />
                </ListItem>
              </a>
              <a
                className={classes.externalLink}
                href="http://www.franciscanathletics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Athletics'} />
                </ListItem>
              </a>
              <a
                className={classes.externalLink}
                href="http://bookstore.franciscan.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Bookstore'} />
                </ListItem>
              </a>
              <a
                className={classes.externalLink}
                href="http://www.steubenvilleconferences.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Conferences'} />
                </ListItem>
              </a>
              <a
                className={classes.externalLink}
                href="http://giving.franciscan.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Give'} />
                </ListItem>
              </a>
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    )
  }
}

const styles = theme => ({
  list: {
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: 265
    }
  },
  listFull: {
    width: 'auto'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  drawerImg: {
    margin: '0 auto',
    cursor: 'pointer'
  },
  externalLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  inputLabelFocused: {
    color: '#998643'
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: '#998643'
    }
  }
})
export default withStyles(styles)(TemporaryDrawer)
