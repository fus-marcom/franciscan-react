import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  appBar: {
    background: '#ffffff',
    borderBottom: `solid 3px #998643`
  },
  menuButton: {
    color: `${theme.palette.primary[500]}`,
    marginLeft: -12,
    marginRight: 10
  },
  headerImage: {
    maxHeight: '3rem'
  }
})

function ButtonAppBar (props) {
  const { classes, toggleDrawer } = props
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" component="span" className={classes.flex}>
            <img
              className={classes.headerImage}
              src="https://franciscan.university/cdn/fus-logo.svg"
              alt=""
            />
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
