import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const FormDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: theme.spacing(3),
    maxWidth: "400px"
  }
}));

const ModalForm = ({title, children}) => {
  const appContext = useContext(AppContext);
  const { appState, appDispatch } = appContext;
  const { modal } = appState;

  const handleClose = () => {
    appDispatch({
      type: "CLOSE_MODAL"
    })
  }

  return (
      <FormDialog onClose={handleClose} open={modal.isOpen} fullWidth>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:"flex-end"}}>
          <Fab color="secondary">
              <CloseIcon onClick={handleClose} />
          </Fab>
        </Box>
        <DialogTitle sx={{textAlign:"left", p:0, fontWeight:700}}>Hey, You Can Add {title} Here</DialogTitle>
        <DialogContent sx={{p:0}}>
          {children}
        </DialogContent>
    </FormDialog>
   
  );
};

export default ModalForm;
