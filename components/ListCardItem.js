import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import React, { Component } from 'react'

const styles = theme => ({
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'start'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: 0
  }
})

class ListCard extends Component {
  render () {
    const { classes, item } = this.props

    return (
      <div>
        {item.link ? (
          <Link prefetch href={item.link}>
            <ListItem dense button divider className={classes.listItem}>
              <ListItemText
                primary={item.primaryText}
                secondary={item.secondaryText}
              />
              {item.image && (
                <Avatar
                  className={classes.avatar}
                  alt={item.imgAlt}
                  title={item.imgTitle}
                  src={item.image}
                />
              )}
            </ListItem>
          </Link>
        ) : (
          <ListItem dense divider className={classes.listItem}>
            <ListItemText
              primary={item.primaryText}
              secondary={item.secondaryText}
            />
            {item.image && (
              <Avatar
                className={classes.avatar}
                alt={item.imgAlt}
                title={item.imgTitle}
                src={item.image}
              />
            )}
          </ListItem>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(ListCard)
