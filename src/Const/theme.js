import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#00FFFF', // cyan color
        },
        secondary: {
            main: '#3AA14F' // Green
        },
        third: {
            main: '#FFFFFF' // Light white
        },
        bg: {
            main: '#424C55' //Dark grey
        },
        bg_secondary: {
            main: '#dcdcdc' //lighter grey
        },
        menu_grey: {
            main: '#585858' //grey white
        }
    },
    typography: {
        fontFamily: 'sans-serif',
        color: 'black',
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
                    backgroundColor: '#585858',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#00FFFF',
                }
            }
        },
      },
});