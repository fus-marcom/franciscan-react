import React, { Component } from 'react'

export default class Hat extends Component {
  static async getInitialProps ({ query: { id } }) {
    console.log(id)
    return { id }
  }
  render () {
    return (
      <div>
        <p>Page for hat with id: {this.props.id}</p>
      </div>
    )
  }
}
