import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({setOpen}) => {
  return (
    <>
        <Fab color="secondary" aria-label="add" sx={{position:"absolute", right: 16, bottom: 16}}>
            <AddIcon onClick={()=>setOpen(true)} />
        </Fab>
    </>
  );
};

export default AddButton;
