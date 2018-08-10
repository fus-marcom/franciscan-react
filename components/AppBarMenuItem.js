import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React, { Component } from 'react'

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
    const {
      classes,
      toggleDrawer,
      linkId,
      content,
      asUrl,
      linkUrl
    } = this.props
    return (
      <li className={classes.listLi}>
        <Typography
          variant={'headline'}
          id={linkId}
          title={content}
          className={classes.ulLink}
          onClick={() => toggleDrawer && toggleDrawer(linkId)}
        >
          {linkId ? (
            content
          ) : (
            <Link
              prefetch={asUrl && true}
              href={asUrl || linkUrl}
              as={asUrl && linkUrl}
            >
              <a style={{ color: 'rgba(0,0,0,0.87)' }}>{content}</a>
            </Link>
          )}
        </Typography>
      </li>
    )
  }
}

export default withStyles(styles)(AppBarMenuItem)
