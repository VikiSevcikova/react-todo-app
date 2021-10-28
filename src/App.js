import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import { ThemeProvider } from '@mui/material/styles';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from './Utils';
import { theme } from "./style/Theme";
import Dashboard from "./pages/Dashboard";

function App() {
  const admin = {id: Math.random(), name:"Admin", email:"admin@gmail.com", isAdmin:"true", password:"123"}
  const [users, setUsers] = useState(getFromLocalStorage("users"));
  
  useEffect(()=>{
    if(!users.some(u => u.email === admin.email && u.isAdmin)){
      setUsers([...users, admin]);
    }
  },[])

  useEffect(()=>{
    saveToLocalStorage("users", users);
  },[users]);

  return (
    <Router>   
      <ThemeProvider theme={theme}> 
        <Switch>
          <Route exact path="/login">
            <Login users={users}/>
          </Route>
          <Route exact path="/signup">
            <Signup users={users} setUsers={setUsers}/>
          </Route>
          <PrivateRoute exact path="/" >
            <Dashboard users={users} setUsers={setUsers} />
          </PrivateRoute>
        </Switch>
      </ThemeProvider>
    </Router>   

  );
}

export default App;
