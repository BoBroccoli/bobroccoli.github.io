import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#E4E5E6' // Light white
        },
        secondary: {
            main: '#3AA14F' // Green
        },
        bg: {
            main: '#424C55' //Dark grey
        },
        bg_secondary: {
            main: '#86909C' //lighter grey
        }
    },
    typography: {
        fontFamily: 'sans-serif',
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'sans-serif',
                    fontSize: '30px',
                    margin: 10
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    backgroundColor: '#E4E5E6'
                }
            }
        }
      },
});