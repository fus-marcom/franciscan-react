import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

// import SwipeableViews from 'react-swipeable-views'

function TabContainer ({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

class TabbedSection extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Undergraduate" />
          <Tab label="Graduate" />
          <Tab label="Online" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            {' '}
            <Typography>Buy now at the low low price of only $24k!</Typography>
            <Link
              prefetch
              href="/page?type=academicsPages&id=majors"
              as="/academics/ug/majors"
            >
              <a>Learn More</a>
            </Link>
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Graduate</TabContainer>}
        {value === 2 && <TabContainer>Online</TabContainer>}
      </div>
    )
  }
}

TabbedSection.propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = theme => ({
  root: {
    width: '100%'
  }
})

export default withStyles(styles)(TabbedSection)
