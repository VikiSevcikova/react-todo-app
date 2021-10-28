import {useContext} from 'react';
import Snackbar from '@mui/material/Snackbar';
import { AppContext } from '../context/AppContext';

const AlertMessage = () => {
    const appContext = useContext(AppContext);
    const { appState, appDispatch } = appContext;
    const { alert } = appState;

    const handleClose = () => {
        appDispatch({
            type: "HIDE_ALERT"
          })
      };
  return (
    <Snackbar open={alert.isVisible} onClose={handleClose} message={alert.message} anchorOrigin={{vertical: "bottom", horizontal: "center"}} autoHideDuration={5000} />
  );
};

export default AlertMessage;
