import React, { Component } from 'react'
import AppBar from './AppBar'
import Drawer from './Drawer'
import Footer from './Footer'

class Layout extends Component {
  state = {
    drawer: false
  }

  toggleDrawer = () => {
    this.setState(state => ({ drawer: !state.drawer }))
  }

  render () {
    return (
      <div>
        <Drawer open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
        <AppBar toggleDrawer={this.toggleDrawer} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
