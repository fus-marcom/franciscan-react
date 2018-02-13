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
            {itemsArray.map(item => (
              <ListItem
                dense
                button
                className={classes.listItem}
                key={item.link}
              >
                <Link prefetch href={item.link}>
                  <ListItemText
                    primary={item.primary}
                    secondary="American higher education is in turmoil like never before. Student debt is at an all-time high, casting doubt on the value of a college education. The liberal arts are imperiled. Serious campus debate and free speech are threatened by politicization. An “anything goes” morality is the norm on many campuses.

Against this backdrop, the Veritas Center for Ethics in Public Life at Franciscan University of Steubenville will host a two-day conference, “The State of American Higher Education, 2018,” to be held at Franciscan University April 6-7, 2018."
                  />
                  <Avatar
                    className={classes.avatar}
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />{' '}
                </Link>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ListCard)
