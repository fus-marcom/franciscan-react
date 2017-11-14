import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Grid from 'material-ui/Grid'

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
  },
  // social: {
  //   position: 'fixed',
  //   top: '8px',
  //   right: '116px'
  // },
  svgStyle: {
    width: '30px',
    fill: `${theme.palette.primary[500]}`
  },
  // secondaryCTA: {
  //   position: 'fixed',
  //   top: '8px',
  //   right: '16px'
  // },
  // appBarLinks: {
  //   lineHeight: '48px'
  // },
  searchSVG: {
    cursor: 'pointer',
    width: '27px',
    fill: `${theme.palette.primary[500]}`
  },
  listStyles: {
    display: 'flex',
    margin: 0
  },
  listLi: {
    margin: '0 8px'
  },
  col1: {
    display: 'flex',
    flex: 1
  },
  col2: {
    flex: 1
  },
  alignReverse: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  ulLink: {
    textDecoration: 'none',
    paddingBottom: '6px'
  }
})

function ButtonAppBar (props) {
  const { classes, toggleDrawer } = props
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <div className={classes.col1}>
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
                src="/static/img/fus-logo.svg"
                alt=""
              />
            </Typography>
          </div>
          <Grid container className={classes.col2}>
            <Grid item md={12} className={classes.alignReverse}>
              <div className={classes.social}>
                <a className="facebook">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z" />
                  </svg>
                </a>
                <a className="twitter">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z" />
                  </svg>
                </a>
                <a className="google-plus">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M487 370c21 129-62 237-195 237-114 0-207-93-207-207s93-207 207-207c89 0 138 54 138 54l-56 54s-29-32-82-32c-71 0-128 59-128 131 0 73 57 131 128 131 81 0 113-58 117-90H292v-71h195zm189-59v59h59v60h-59v59h-59v-59h-59v-60h59v-59h59z" />
                  </svg>
                </a>
                <a className="linkedin">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
                    <circle cx="219" cy="220" r="56" />
                  </svg>
                </a>
                <a className="instagram">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z" />
                  </svg>
                </a>
                <a className="pinterest">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M287 681c-9-3-15-77-6-115l38-163s-9-20-9-49c0-46 26-80 59-80 28 0 42 21 42 46 0 28-19 71-28 110-8 33 17 59 49 59 58 0 104-61 104-150 0-79-57-134-138-134-94 0-148 69-148 142 0 28 9.7 57.4 23 74 4 5 5 6 2 17l-8 31s-2 9.5-14 3c-41-22.3-63-78-63-126 0-104 75-199 217-199 114 0 203 81 203 190 0 113-72 205-171 205-55 0-75-38-75-38l-21 78c-11 41-47 102-56 99z" />
                  </svg>
                </a>
                <a className="flickr">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <circle cx="234" cy="400" r="136" className="flickr-blue" />
                    <circle cx="566" cy="400" r="136" className="flickr-pink" />
                  </svg>
                </a>
                <a className="snapchat">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M400 152c-23 0-98 6-133 83-14 30-7 82-5 122-14 14-38-3-48-3-20 0-39 21 1 36 21 8 55 16 39 49-2 3-36 79-112 94-10 2-9 25 63 34 8 1 6 35 17 35s23-5 42-5c65 0 68 50 136 50s71-50 136-50c19 0 31 5 42 5s9-34 17-35c72-9 73-32 63-34-76-15-110-91-112-94-16-33 18-41 39-49 40-15 21-36 1-36-10 0-34 17-48 3 2-40 9-92-5-122-35-77-110-83-133-83z" />
                  </svg>
                </a>
                <a className="youtube">
                  <svg className={classes.svgStyle} viewBox="0 0 800 800">
                    <path d="M400 224c144 0 201 2 224 25 17 17 26 52.125 26 151s-9 134-26 151c-23 23-80 25-224 25s-201-2-224-25c-17-17-26-52.125-26-151s9-134 26-151c23-23 80-25 224-25zm-52 100v141l135-70z" />
                  </svg>
                </a>
                {/*
              Copyright (c) 2016 by Andreas Larsen (http://codepen.io/larsenwork/pen/admEZM)
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

            */}
                <Button raised color="primary" className={classes.secondaryCTA}>
                  Donate
                </Button>
              </div>
            </Grid>
            <Grid item md={12} className={classes.alignReverse}>
              <ul className={classes.listStyles}>
                <li className={classes.listLi}>
                  <Typography
                    component={'a'}
                    type={'headline'}
                    id="about-link"
                    className={classes.ulLink}
                    href="#"
                  >
                    About
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    component={'a'}
                    type={'headline'}
                    id="academics-link"
                    className={classes.ulLink}
                    href="#"
                  >
                    Academics
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    component={'a'}
                    type={'headline'}
                    id="admissions-link"
                    className={classes.ulLink}
                    href="#"
                  >
                    Admissions
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    component={'a'}
                    type={'headline'}
                    id="faith-and-life-link"
                    href="#"
                    title="Link Three"
                    className={classes.ulLink}
                  >
                    Faith and Life
                  </Typography>
                </li>
                <li id="top-nav-search" className={classes.listLi}>
                  <div className="search-icon">
                    <svg viewBox="0 0 24 24" className={classes.searchSVG}>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                      />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <div id="search-input" style={{ display: 'none' }}>
                    <input
                      name="ctl00$MainNav1$txbSearch"
                      id="ctl00_MainNav1_txbSearch"
                      className="txbSearch"
                      type="search"
                      placeholder="Search"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#21412a"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
