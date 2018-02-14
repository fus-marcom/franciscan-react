import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Link from 'next/link'

const styles = theme => ({
  card: {
    width: '100%'
  },
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

class ListCard extends React.Component {
  render () {
    const { classes, itemsArray, listTitle } = this.props
    return (
      <Card className={classes.card}>
        <CardContent className={classes.listCardContent}>
          <Typography type="headline" component="h2">
            {listTitle}
          </Typography>
          <List>
            {itemsArray.map((item, i) => (
              <Link prefetch href={item.link} key={item.link + i}>
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
            ))}
          </List>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ListCard)
