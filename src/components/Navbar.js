import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    history.push("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700}}>
            Hello {user && user.name}
          </Typography>
          <Button onClick={handleLogout} variant="contained" color="warning">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
