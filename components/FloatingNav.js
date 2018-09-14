import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import React, { Component } from 'react'
import { getJSON } from '../utils/fetch'
const uuidv1 = require('uuid/v1')

class FloatingNav extends Component {
  state = {
    data: null,
    loading: true
  }
  componentDidMount () {
    const apiUrl = 'https://wp.franciscan.university/wp-json/wp/v2/'
    const params = `menu?slug=${this.props.menuSlug}`
    getJSON(apiUrl + params).then(data =>
      this.setState({ data: data, loading: false })
    )
  }
  render () {
    const { classes } = this.props
    const { data, loading } = this.state
    return (
      <div className={classes.container}>
        <ul className={classes.nav}>
          {!loading &&
            data.length > 0 &&
            data[0].acf.links.map(item => (
              <Link href={item.link_path} key={uuidv1()}>
                <li className={classes.navItem}>{item.link_name}</li>
              </Link>
            ))}
        </ul>
      </div>
    )
  }
}

const styles = theme => ({
  container: {
    position: 'sticky',
    top: '50px',
    float: 'right',
    marginRight: '16px',
    maxWidth: '19%',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      float: 'left',
      marginRight: 0,
      top: 0,
      maxWidth: '100%'
    }
  },
  nav: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navItem: {
    marginBottom: '4px',
    padding: '4px',
    cursor: 'pointer',
    color: 'hsla(47, 39%, 34%, 1)'
  }
})

export default withStyles(styles)(FloatingNav)
