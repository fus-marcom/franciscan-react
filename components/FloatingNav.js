import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import React, { Component } from 'react'
const uuidv1 = require('uuid/v1')

class FloatingNav extends Component {
  render () {
    const { classes, menuItems } = this.props
    return (
      <div className={classes.container}>
        <ul className={classes.nav}>
          {menuItems.map(item => (
            <Link href={item.linkUrl} key={uuidv1()}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

const styles = theme => ({
  container: {
    position: 'sticy',
    top: '50px',
    float: 'right',
    marginRight: '16px'
  },
  nav: {
    listStyle: 'none'
  },
  navItem: {
    marginBottom: '8px',
    padding: '8px',
    cursor: 'pointer'
  }
})

export default withStyles(styles)(FloatingNav)
