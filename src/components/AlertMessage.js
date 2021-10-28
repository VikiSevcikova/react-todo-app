import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const AlertMessage = ({alert, setAlert}) => {
    const handleClose = () => {
        setAlert({state: false, message: ""});
      };
  return (
    <Snackbar open={alert.state} onClose={handleClose} message={alert.message} anchorOrigin={{vertical: "bottom", horizontal: "center"}} autoHideDuration={5000} />
  );
};

export default AlertMessage;
