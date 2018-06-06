import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
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
