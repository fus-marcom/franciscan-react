import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Link from 'next/link'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

const styles = theme => ({
  list: {
    width: 300
  },
  listFull: {
    width: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  formControl: {
    margin: theme.spacing.unit
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
                    className="drawerImg"
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
              <ListItem button onClick={this.handleClick}>
                <ListItemText inset primary="Inbox" />
                {this.state.openItems ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                component="li"
                in={this.state.openItems}
                timeout="auto"
                unmountOnExit
              >
                <List
                  disablePadding
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                  <ListItem button className={classes.nested}>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
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
