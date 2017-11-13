import React from 'react'
import { AppBar as MUIAppBar } from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ViewQuiltIcon from 'material-ui-icons/ViewQuilt'
import ViewStreamIcon from 'material-ui-icons/ViewStream'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import PrintIcon from 'material-ui-icons/Print'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'
import classNames from 'classnames'
import Tooltip from 'material-ui/Tooltip'
import TextField from 'material-ui/TextField'

const AppBar = ({
  classes,
  open,
  openMenu,
  handleAnyInputChange,
  handleSearchToggle,
  showSearch,
  openSearch,
  handleDrawerOpen,
  handleClick,
  anchorEl,
  handleRequestClose,
  handleLayoutChange,
  handleLogout,
  handlePrintIcon,
  viewtype,
  style
}) => {
  return (
    <div style={style}>
      <MUIAppBar className={classNames(classes.appBar, open)}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, classes.navIconHide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            type="display1"
            color="inherit"
            className={classNames(classes.flex, classes.typo)}
            noWrap
          >
            Bulletin
          </Typography>
          {showSearch ? (
            <div>
              <TextField
                onChange={handleAnyInputChange}
                name="searchText"
                placeholder="Search"
                autoFocus
              />
              <Tooltip title="Close Search" placement="bottom">
                <IconButton
                  onClick={handleSearchToggle}
                  color="primary"
                  aria-label="Close Search"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title="Search" placement="bottom">
              <IconButton
                onClick={handleSearchToggle}
                color="primary"
                aria-label="Search"
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip
            title={viewtype === 'grid' ? 'List View' : 'Grid View'}
            placement="bottom"
          >
            <IconButton
              onClick={handleLayoutChange}
              color="primary"
              aria-label="View Type"
            >
              {viewtype === 'grid' ? <ViewStreamIcon /> : <ViewQuiltIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Print View">
            <IconButton
              color="primary"
              aria-label="Print View"
              onClick={handlePrintIcon}
            >
              <PrintIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            color="primary"
            aria-label="More"
            aria-owns={openMenu ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onRequestClose={handleRequestClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </MUIAppBar>
    </div>
  )
}

export default AppBar
