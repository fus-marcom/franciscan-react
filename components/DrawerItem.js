import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class DrawerItem extends React.Component {
  render () {
    const {
      classes,
      toggleDrawer,
      primaryText,
      submenuItems,
      isOpen,
      expandItem,
      itemId
    } = this.props
    return (
      <div>
        <ListItem button onClick={() => expandItem(itemId)}>
          <ListItemText
            style={{ paddingLeft: '16px' }}
            inset
            primary={primaryText}
          />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
          <List disablePadding onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            {submenuItems.map(item => (
              <ListItem button className={classes.nested} key={item.text}>
                <ListItemText
                  inset
                  style={{ paddingLeft: '16px' }}
                  primary={item.text}
                  linkUrl={item.linkUrl}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styles)(DrawerItem)
