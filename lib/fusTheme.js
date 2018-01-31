import { createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      '50': '#e4e8e5',
      '100': '#bcc6bf',
      '200': '#90a095',
      '300': '#647a6a',
      '400': '#425e4a',
      '500': '#21412a',
      '600': '#1d3b25',
      '700': '#18321f',
      '800': '#142a19',
      '900': '#0b1c0f',
      A100: '#5dff78',
      A200: '#2aff4e',
      A400: '#00f629',
      A700: '#00dd25',
      contrastDefaultColor: 'dark'
    },
    secondary: {
      50: '#f7f7f7',
      100: '#ebebeb',
      200: '#dedede',
      300: '#d1d1d1',
      400: '#c7c7c7',
      500: '#bdbdbd',
      600: '#b7b7b7',
      700: '#aeaeae',
      800: '#a6a6a6',
      900: '#989898',
      A100: '#ffffff',
      A200: '#ffd4d4',
      A400: '#ffb41f',
      A700: '#ffbbbb',
      contrastDefaultColor: 'dark'
    }
  }
})

export default theme
