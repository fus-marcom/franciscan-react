import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppBar from './AppBar'
import theme from '../misc/fusTheme'

import './index.css'

const TemplateWrapper = ({ classes, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <AppBar />
        {children()}
      </div>
    </MuiThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
