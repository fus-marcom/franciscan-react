import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const AppBarMenuItem = ({
  classes,
  content,
  toggleDrawer,
  linkId,
  asUrl,
  linkUrl
}) => (
  <li className={classes.item}>
    <Typography
      variant={'headline'}
      id={linkId}
      title={content}
      className={classes.content}
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

const styles = theme => ({
  item: {
    margin: '0',
    padding: '0 12px'
  },
  content: {
    textDecoration: 'none',
    paddingBottom: '6px',
    cursor: 'pointer',
    display: 'inline-block'
  }
})

export default withStyles(styles)(AppBarMenuItem)
