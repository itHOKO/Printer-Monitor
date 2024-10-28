// src/theme.js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          500: '#026596',
        },
        success: {
          500: '#4CAF50',
        },
        warning: {
          500: '#d97706', // Darker orange for "Changing paper roll"
        },
        danger: {
          500: '#d32f2f',
        },
      },
    },
  },
  mode: 'dark',
});

export default theme;
