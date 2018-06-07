// @inheritedComponent ButtonBase

import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import ButtonBase from '@material-ui/core/ButtonBase'
import { capitalize } from '@material-ui/core/utils/helpers'
import { isMuiElement } from '@material-ui/core/utils/reactHelpers'

export const styles = theme => ({
  root: {
    ...theme.typography.button,
    lineHeight: '1.4em', // Improve readability for multiline button.
    boxSizing: 'border-box',
    minWidth: theme.spacing.unit * 11,
    minHeight: 36,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    borderRadius: 2,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      textDecoration: 'none',
      // Reset on mouse devices
      backgroundColor: fade(theme.palette.text.primary, 0.12),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      '&$disabled': {
        backgroundColor: 'transparent'
      }
    }
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },
  flatPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(`${theme.palette.primary.main}`, 0.5)
    }
  },
  flatSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: '#21412a',
      backgroundColor: '#fff'
    }
  },
  colorInherit: {
    color: 'inherit'
  },
  raised: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    '&$keyboardFocused': {
      boxShadow: theme.shadows[6]
    },
    '&:active': {
      boxShadow: theme.shadows[8]
    },
    '&$disabled': {
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    }
  },
  keyboardFocused: {},
  raisedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main
      }
    }
  },
  raisedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },
  disabled: {
    color: theme.palette.action.disabled
  },
  fab: {
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    fontSize: 24,
    height: 56,
    boxShadow: theme.shadows[6],
    '&:active': {
      boxShadow: theme.shadows[12]
    }
  },
  mini: {
    width: 40,
    height: 40
  },
  sizeSmall: {
    padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
    minWidth: theme.spacing.unit * 8,
    minHeight: 32,
    fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1)
  },
  sizeLarge: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    minWidth: theme.spacing.unit * 14,
    minHeight: 40,
    fontSize: theme.typography.pxToRem(theme.typography.fontSize + 1)
  },
  fullWidth: {
    width: '100%'
  }
})

function InvertedButton (props) {
  const {
    children: childrenProp,
    classes,
    className: classNameProp,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    mini,
    size,
    variant,
    ...other
  } = props

  const fab = variant === 'fab'
  const raised = variant === 'raised'
  const flat = !raised && !fab
  const className = classNames(
    classes.root,
    {
      [classes.raised]: raised || fab,
      [classes.fab]: fab,
      [classes.mini]: fab && mini,
      [classes.colorInherit]: color === 'inherit',
      [classes.flatPrimary]: flat && color === 'primary',
      [classes.flatSecondary]: flat && color === 'secondary',
      [classes.raisedPrimary]: !flat && color === 'primary',
      [classes.raisedSecondary]: !flat && color === 'secondary',
      [classes[`size${capitalize(size)}`]]: size !== 'medium',
      [classes.disabled]: disabled,
      [classes.fullWidth]: fullWidth
    },
    classNameProp
  )

  let children = childrenProp

  if (fab) {
    children = React.Children.map(children, child => {
      if (isMuiElement(child, ['Icon', 'SvgIcon'])) {
        return React.cloneElement(child, { fontSize: true })
      }
      return child
    })
  }

  return (
    <ButtonBase
      className={className}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      classes={{
        focusVisible: classes.keyboardFocused
      }}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  )
}

InvertedButton.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat'
}

export default withStyles(styles, { name: 'MuiButton' })(InvertedButton)
