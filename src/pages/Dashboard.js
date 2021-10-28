import * as React from 'react';
import Navbar from '../components/Navbar';
import styles from "../style/style.module.css";
import Todos from '../components/Todos';
import Users from '../components/Users';
import { getFromLocalStorage } from '../Utils';

const Dashboard = () => {
  const user = getFromLocalStorage('loggedInUser');

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        {user && user.isAdmin ? 
            <Users user={user}/>
        :
            <Todos user={user}/>
        }
      </div>
    </>
  );
};

export default Dashboard;
