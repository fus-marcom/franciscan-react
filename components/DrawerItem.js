import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Link from 'next/link'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  nestedMore: {
    paddingLeft: theme.spacing.unit * 6
  },
  subLink: {
    textDecoration: 'none'
  },
  linkText: {
    color: 'rgba(0,0,0,0.54)'
  },
  subLinkText: {
    color: 'rgba(0,0,0,0.54)',
    fontWeight: 300
  },
  subItemIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderLeft: '1px solid rgba(0,0,0,0.08)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      borderLeft: 'none'
    }
  }
})

class DrawerItem extends Component {
  render () {
    const {
      classes,
      toggleDrawer,
      primaryText,
      submenuItems,
      isOpen,
      expandItem,
      itemId,
      isSubOpen,
      expandSubItem
    } = this.props

    const MenuLink = (item, subSub = false) => (
      <Link
        prefetch={item.asUrl && true}
        href={item.asUrl ? item.asUrl : item.linkUrl}
        as={item.asUrl && item.linkUrl}
      >
        <a className={classes.subLink}>
          <ListItem
            button
            className={subSub ? classes.nestedMore : classes.nested}
          >
            <ListItemText
              inset
              style={{ paddingLeft: '16px' }}
              primary={item.text}
              classes={{ primary: classes.linkText }}
            />
          </ListItem>
        </a>
      </Link>
    )

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
        {submenuItems && (
          <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              {submenuItems.map(
                item =>
                  item.subMenu ? (
                    <Grid container spacing={0} key={item.text}>
                      <Grid
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                        item
                        xs={10}
                      >
                        {MenuLink(item)}
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        onClick={() => expandSubItem(item.text)}
                        className={classes.subItemIconContainer}
                      >
                        {isSubOpen[item.text] ? (
                          <ExpandLess
                            style={{
                              alignSelf: 'center',
                              color: 'rgba(0,0,0,0.54'
                            }}
                          />
                        ) : (
                          <ExpandMore
                            style={{
                              alignSelf: 'center',
                              color: 'rgba(0,0,0,0.54'
                            }}
                          />
                        )}
                      </Grid>
                      <Collapse
                        component="li"
                        in={isSubOpen[item.text]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List disablePadding>
                          {item.subMenu.map(subItem => (
                            <div
                              onClick={toggleDrawer}
                              onKeyDown={toggleDrawer}
                              key={subItem.text}
                            >
                              {MenuLink(subItem, true)}
                            </div>
                          ))}
                        </List>
                      </Collapse>
                    </Grid>
                  ) : (
                    <div
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                      key={item.text}
                    >
                      {MenuLink(item)}
                    </div>
                  )
              )}
            </List>
          </Collapse>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(DrawerItem)
