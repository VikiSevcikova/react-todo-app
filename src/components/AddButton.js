import {useContext} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AppContext } from '../context/AppContext';

const AddButton = () => {
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const handleOpen = () => {
    appDispatch({
      type: "OPEN_MODAL"
    })
  }
  return (
    <>
        <Fab color="secondary" aria-label="add" sx={{position:"absolute", right: 16, bottom: 16}}>
            <AddIcon onClick={handleOpen} />
        </Fab>
    </>
  );
};

export default AddButton;
