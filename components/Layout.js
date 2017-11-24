import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import AppBar from './AppBar'
import Drawer from './Drawer'
import Footer from './Footer'

const styles = theme => ({
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  main: {
    flex: '1 0 auto'
  }
})

class Layout extends Component {
  state = {
    drawer: false
  }

  toggleDrawer = () => {
    this.setState(state => ({ drawer: !state.drawer }))
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.layout}>
        <Drawer open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
        <AppBar toggleDrawer={this.toggleDrawer} />
        <main className={classes.main}>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
