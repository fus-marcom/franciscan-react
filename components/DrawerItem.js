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
  state = {
    openItems: false
  }

  expandItem = () => {
    this.setState(prevState => ({ openItems: !prevState.openItems }))
  }

  render () {
    const { classes, toggleDrawer, primaryText, submenuItems } = this.props
    return (
      <div>
        <ListItem button onClick={this.expandItem}>
          <ListItemText inset primary={primaryText} />
          {this.state.openItems ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state.openItems}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            {submenuItems.map(item => (
              <ListItem button className={classes.nested} key={item.text}>
                <ListItemText
                  inset
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
