const drawerWidth = 250

const styles = theme => ({
  logo: {
    width: '234px',
    margin: '8px auto'
  },
  flex: {
    flex: 1
  },
  closeButton: {
    top: '5px',
    left: '30px',
    position: 'relative',
    zIndex: 1
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    backgroundColor: '#fff',
    borderBottom: 'solid 3px #998643',
    color: '#21412a',
    position: 'fixed',
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  typo: {
    marginLeft: 15
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: '100%'
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerItem: {
    fontSize: '16px'
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    marginTop: 56,
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      marginLeft: drawerWidth
    }
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  image: {
    height: '100%',
    width: '100%'
  },
  btn: {
    cursor: 'pointer'
  },
  absolute: {
    flip: false,
    position: 'fixed',
    bottom: 40,
    right: 40
  },
  formControl: {
    width: '100%'
  }
})

export default styles
