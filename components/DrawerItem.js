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
  state = {
    drawerItems: {}
  }

  expandSubItem = itemId => {
    this.setState(prevState => ({
      drawerItems: {
        ...prevState.drawerItems,
        [itemId]: !prevState.drawerItems[itemId]
      }
    }))
    console.log(this.state.drawerItems)
  }
  render () {
    const { drawerItems } = this.state
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
                        <Link prefetch href={item.asUrl} as={item.linkUrl}>
                          <a className={classes.subLink}>
                            <ListItem button className={classes.nested}>
                              <ListItemText
                                inset
                                style={{ paddingLeft: '16px' }}
                                primary={item.text}
                                classes={{ primary: classes.linkText }}
                              />
                            </ListItem>
                          </a>
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        onClick={() => this.expandSubItem(item.text)}
                        className={classes.subItemIconContainer}
                      >
                        {drawerItems[item.text] ? (
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
                        in={drawerItems[item.text]}
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
                              <Link
                                prefetch
                                href={subItem.asUrl}
                                as={subItem.linkUrl}
                              >
                                <a className={classes.subLink}>
                                  <ListItem
                                    button
                                    className={classes.nestedMore}
                                  >
                                    <ListItemText
                                      inset
                                      style={{ paddingLeft: '16px' }}
                                      primary={subItem.text}
                                      classes={{ primary: classes.subLinkText }}
                                    />
                                  </ListItem>
                                </a>
                              </Link>
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
                      <Link prefetch href={item.asUrl} as={item.linkUrl}>
                        <a className={classes.subLink}>
                          <ListItem button className={classes.nested}>
                            <ListItemText
                              inset
                              style={{ paddingLeft: '16px' }}
                              primary={item.text}
                              classes={{ primary: classes.linkText }}
                            />
                          </ListItem>
                        </a>
                      </Link>
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
