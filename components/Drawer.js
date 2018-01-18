import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Link from 'next/link'
import Drawer from 'material-ui/Drawer'
import List, { ListItem } from 'material-ui/List'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import DrawerItem from './DrawerItem'

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
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <Input
                    id="search"
                    type="text"
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
                primaryText="About"
                submenuItems={[
                  {
                    text: 'Link 1',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 2',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 3',
                    linkUrl: '#'
                  }
                ]}
              />
              <DrawerItem
                primaryText="Academics"
                submenuItems={[
                  {
                    text: 'Link 1',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 2',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 3',
                    linkUrl: '#'
                  }
                ]}
              />
              <DrawerItem
                primaryText="Admissions"
                submenuItems={[
                  {
                    text: 'Link 1',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 2',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 3',
                    linkUrl: '#'
                  }
                ]}
              />
              <DrawerItem
                primaryText="Faith and Life"
                submenuItems={[
                  {
                    text: 'Link 1',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 2',
                    linkUrl: '#'
                  },
                  {
                    text: 'Link 3',
                    linkUrl: '#'
                  }
                ]}
              />
            </List>
            <Divider />
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
