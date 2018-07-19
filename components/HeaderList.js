import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
const uuidv1 = require('uuid/v1')

const styles = {
  listItem: {
    listStyleType: 'none'
  },
  listGridItem: {
    paddingBottom: 0
  },
  listGridContainer: {
    paddingTop: '8px'
  },
  list: {
    padding: 0,
    margin: 0
  },
  listHeader: {
    margin: '4px 0'
  }
}

class HeaderList extends Component {
  render () {
    const { header, items } = this.props
    return (
      <section>
        <ul style={styles.list}>
          <h4 style={styles.listHeader}>{header}</h4>
          {items.map(item => (
            <li style={styles.listItem} key={uuidv1()}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default withStyles(styles)(HeaderList)
