import {useContext, userContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useStyles } from '../style/Theme';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { loggedInUser } = userState;
  
  const handleLogout = () => {
    userDispatch({
      type: "LOG_OUT"
    })
    history.push("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" >
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700}}>
            Hello {loggedInUser && loggedInUser.name}
          </Typography>
          <Button onClick={handleLogout} variant="contained" color="warning">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
