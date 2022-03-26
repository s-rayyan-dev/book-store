import { createTheme } from '@mui/material/styles';

// TODO ZEESHAN: Incorporate new theme given by the designer and change the use of the Typography element accordingly
// TODO ROHAN: Give new theme to be used.
const theme = createTheme({
  palette: {
    common: {
      black: '#181818',
      white: '#FFFFFF',
      grey: '#C1C1C1',
      facebook: '#0025A8',
      google: '#4285F4',
    },
    border: {
      grey: '#E5E5E5',
      primary: '#0078FE',
      success: '#0BCA91',
    },
    background: {
      grey: '#F6F6F6',
      white: '#FFFFFF',
      primary: '#F2F9FD',
      success: '#CDFFCD',
      secondary: '#FCF0F7',
      error: '#FFD5D5',
      warning: '#FCEFE0',
    },
  },
});

export default theme;
