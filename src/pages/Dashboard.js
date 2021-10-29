import {useContext} from 'react';
import Navbar from '../components/Navbar';
import Todos from '../components/Todos';
import Users from '../components/Users';
import { UserContext } from '../context/UserContext';
import { Box } from '@mui/system';
import { useStyles } from '../style/Theme';

const Dashboard = () => {
  const classes = useStyles();

  const userContext = useContext(UserContext);
  const { userState } = userContext;
  const { loggedInUser } = userState;

  return (
    <>
      <Navbar/>
      <Box container className={classes.container} sx={{padding: "32px 16px", height: "calc(100vh - 64px)", boxSizing: "border-box"}}>
        {loggedInUser && loggedInUser.isAdmin ? 
            <Users />
        :
            <Todos />
        }
      </Box>
    </>
  );
};

export default Dashboard;
