import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List from 'material-ui/List'
import ListCardItem from './ListCardItem'

const styles = theme => ({
  card: {
    width: '100%'
  }
})

class ListCard extends Component {
  render () {
    const { classes, itemsArray, listTitle } = this.props

    return (
      <Card className={classes.card}>
        <CardContent className={classes.listCardContent}>
          <Typography variant="headline" component="h2">
            {listTitle}
          </Typography>
          <List>
            {itemsArray.map((item, i) => <ListCardItem item={item} key={i} />)}
          </List>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ListCard)
