import {useContext} from 'react';
import Navbar from '../components/Navbar';
import styles from "../style/style.module.css";
import Todos from '../components/Todos';
import Users from '../components/Users';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const userContext = useContext(UserContext);
  const { userState } = userContext;
  const { loggedInUser } = userState;

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        {loggedInUser && loggedInUser.isAdmin ? 
            <Users />
        :
            <Todos />
        }
      </div>
    </>
  );
};

export default Dashboard;
