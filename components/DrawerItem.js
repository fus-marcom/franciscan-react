import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Link from 'next/link'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  subLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.54)'
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
    const reg = new RegExp(/\/[a-z-]+/gi)
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
            {submenuItems.map(item => {
              const matches = item.linkUrl.match(reg)
              let href = item.linkUrl
              let as = item.linkUrl
              if (matches.length === 2) {
                href = `/page?id=${matches[1].replace('/', '')}`
              }
              return (
                <ListItem button className={classes.nested} key={item.text}>
                  <ListItemText
                    inset
                    style={{ paddingLeft: '16px' }}
                    primary={
                      <Link prefetch as={as} href={href}>
                        <a className={classes.subLink}>{item.text}</a>
                      </Link>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styles)(DrawerItem)
