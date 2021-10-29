import {useContext} from 'react';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppContext } from '../context/AppContext';

const ThemeModeButton = () => {
  const appContext = useContext(AppContext);
  const { appState, appDispatch } = appContext;

  const handleClick = () => {
    appDispatch({
      type: "CHANGE_MODE"
    })
  }
  return (
    <>
        <Fab color="secondary" aria-label="add" sx={{position:"absolute", left: 16, bottom: 16}}>
            {appState.mode === "light" ? 
                <LightModeIcon onClick={handleClick} />
            :
                <DarkModeIcon onClick={handleClick} />
            }
        </Fab>
    </>
  );
};

export default ThemeModeButton;
