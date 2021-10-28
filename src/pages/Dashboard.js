import * as React from 'react';
import Navbar from '../components/Navbar';
import styles from "../style/style.module.css";
import Todos from '../components/Todos';
import Users from '../components/Users';

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
         {user.isAdmin ? 
            <Users user={user}/>
        :
            <Todos user={user}/>
        }
      </div>
     
    </>
  );
};

export default Dashboard;
