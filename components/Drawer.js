import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Link from 'next/link'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import SearchIcon from 'material-ui-icons/Search'
import OpenInNewIcon from 'material-ui-icons/OpenInNew'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import DrawerItem from './DrawerItem'
import {
  aboutMenu,
  academicsMenu,
  admissionsMenu,
  faithMenu
} from '../data/drawerMenu'

const styles = theme => ({
  list: {
    width: 300
  },
  listFull: {
    width: 'auto'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  drawerImg: {
    margin: '0 auto'
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

class TemporaryDrawer extends React.Component {
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

  render () {
    const { classes, toggleDrawer, open } = this.props

    return (
      <Drawer open={open} onClose={toggleDrawer}>
        <div tabIndex={0} role="button">
          <div className={classes.list}>
            <List>
              <ListItem>
                <Link href={'/'}>
                  <img
                    className={classes.drawerImg}
                    width="200"
                    src="/static/img/fus-logo.svg"
                    alt="logo"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    FormControlClasses={{
                      focused: classes.inputLabelFocused
                    }}
                    htmlFor="search"
                  >
                    Search
                  </InputLabel>
                  <Input
                    id="search"
                    type="text"
                    classes={{
                      inkbar: classes.inputInkbar
                    }}
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </ListItem>
              <DrawerItem
                expandItem={this.props.expandItem}
                itemId="about"
                primaryText="About"
                submenuItems={aboutMenu}
                isOpen={this.props.drawerItems.about}
              />
              <DrawerItem
                primaryText="Academics"
                submenuItems={academicsMenu}
                isOpen={this.props.drawerItems.academics}
                expandItem={this.props.expandItem}
                itemId="academics"
              />
              <DrawerItem
                expandItem={this.props.expandItem}
                itemId="admissions"
                primaryText="Admissions"
                submenuItems={admissionsMenu}
                isOpen={this.props.drawerItems.admissions}
              />
              <DrawerItem
                expandItem={this.props.expandItem}
                itemId="faith-and-life"
                primaryText="Faith and Life"
                submenuItems={faithMenu}
                isOpen={this.props.drawerItems['faith-and-life']}
              />
              <Divider />
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
                href="http://giving.franciscan.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem button>
                  <ListItemIcon>
                    <OpenInNewIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={'Development'} />
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
            </List>
          </div>
        </div>
      </Drawer>
    )
  }
}

TemporaryDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
