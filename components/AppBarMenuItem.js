import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  listLi: {
    margin: '0',
    padding: '0 8px'
  },
  ulLink: {
    textDecoration: 'none',
    paddingBottom: '6px',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '0 4px'
  }
})

class AppBarMenuItem extends Component {
  render () {
    const { classes, toggleDrawer, linkId, content } = this.props
    return (
      <li className={classes.listLi}>
        <Typography
          component={'a'}
          variant={'headline'}
          id={linkId}
          title={content}
          className={classes.ulLink}
          onClick={() => toggleDrawer(linkId)}
        >
          {content}
        </Typography>
      </li>
    )
  }
}

export default withStyles(styles)(AppBarMenuItem)
