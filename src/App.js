import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "./Utils";
import { theme } from "./style/Theme";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import { TodosProvider } from "./context/TodosContext";
import { UserProvider } from "./context/UserContext";
import { AppProvider } from "./context/AppContext";

function App() {
  const admin = {
    id: Math.random(),
    name: "Admin",
    email: "admin@gmail.com",
    isAdmin: "true",
    password: "123",
  };
  const [users, setUsers] = useState(getFromLocalStorage("users"));

  useEffect(() => {
    if (!users) {
      setUsers([admin]);
    } else if (!users.some((u) => u.email === admin.email && u.isAdmin)) {
      setUsers([...users, admin]);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage("users", users);
  }, [users]);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
      <UserProvider>
        <TodosProvider>
          <Router>
              <Switch>
                <PublicRoute exact path="/login">
                  <Login />
                </PublicRoute>
                <PublicRoute exact path="/signup">
                  <Signup/>
                </PublicRoute>
                <PrivateRoute path="/" exact>
                  <Dashboard />
                </PrivateRoute>
                <Route component={NotFound} />
              </Switch>
          </Router>
        </TodosProvider>
      </UserProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
