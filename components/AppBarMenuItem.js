import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  listLi: {
    margin: '0 8px'
  },
  ulLink: {
    textDecoration: 'none',
    paddingBottom: '6px',
    cursor: 'pointer'
  }
})

class AppBarMenuItem extends React.Component {
  render () {
    const { classes, toggleDrawer, linkId, content } = this.props
    return (
      <li className={classes.listLi}>
        <Typography
          component={'a'}
          type={'headline'}
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
