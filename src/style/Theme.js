import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';

export const theme = createTheme({
        typography: {
          "fontFamily": `'Raleway', sans-serif`,
          fontSize: 16,
          fontWeightRegular: 500
        },
        palette: {
          warning: {
            main: orange[400],
            contrastText: '#000000'
          },
          error: {
            main: red[500],
            contrastText: '#ffff'
          }
        }
      },{
        components:{
          MuiButton:{
            styleOverrides: {
              root:{
                textTransform: "capitalize"
              }
            }
          }
        }
});