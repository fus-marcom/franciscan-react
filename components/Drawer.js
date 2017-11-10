import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
}

const TemporaryDrawer = props => {
  const { classes, toggleDrawer, open } = props
  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem>
          <img
            width="200"
            src="https://franciscan.university/cdn/fus-logo.svg"
            alt="logo"
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Item'} inset />
        </ListItem>
      </List>
      <Divider />
    </div>
  )

  return (
    <Drawer open={open} onRequestClose={toggleDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        {sideList}
      </div>
    </Drawer>
  )
}

TemporaryDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
