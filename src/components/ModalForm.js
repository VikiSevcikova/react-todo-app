import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';

const FormDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: theme.spacing(3),
    maxWidth: "350px"
  }
}));

const ModalForm = ({title, open, handleModalClose, children}) => {
 
  return (
      <FormDialog onClose={handleModalClose} open={open} fullWidth>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:"flex-end"}}>
          <Fab color="secondary">
              <CloseIcon onClick={handleModalClose} />
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
