import { createTheme } from '@mui/material/styles';
import { grey, orange, teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme =>{
  return ({
    appBar: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.invert
    },
    loginContainer:{
      backgroundImage: `linear-gradient(to top left, ${theme.palette.secondary.main} 50%, ${theme.palette.background.default} 0)`
    },
    signupContainer:{
      backgroundImage: `linear-gradient(to top right, ${theme.palette.secondary.main} 50%, ${theme.palette.background.default} 0)`
    },
    cardHeader:{
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.invert
    },
    container: {
      backgroundColor: theme.palette.background.default,
    }
  })
});

export const getDesignTokens = (mode) => ({
  typography: {
    "fontFamily": `'Raleway', sans-serif`,
    fontSize: 16,
    fontWeightRegular: 500
  },
  palette: {
    mode,
    secondary: {
      ...(mode === 'light' ? {
        main: teal[500]
      } :
      {
        main: teal[200]
      }),
    },
    background: {
      ...(mode === 'light' ? {
        default: grey[300],
        paper: grey[200],
      }
       : {
        default: grey[900],
        paper: grey[900],
      })
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
            invert: '#fff'
          }
        : {
            primary: '#fff',
            secondary: grey[500],
            invert: grey[900],
          }),
    },
      components:{
        MuiButton:{
          styleOverrides: {
            root:{
              textTransform: "capitalize"
            }
          }
        }
    }
  },
});


// export const getDesignTokens = (mode) => ({
//         mode,
//         typography: {
//           "fontFamily": `'Raleway', sans-serif`,
//           fontSize: 16,
//           fontWeightRegular: 500
//         },
//         palette: {
//           warning: {
//             main: orange[400],
//             contrastText: '#000000'
//           },
//           error: {
//             main: red[500],
//             contrastText: '#ffff'
//           }
//         }
//       },{
//         components:{
//           MuiButton:{
//             styleOverrides: {
//               root:{
//                 textTransform: "capitalize"
//               }
//             }
//           }
//         }
// });

export const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});
export const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
      paper: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});