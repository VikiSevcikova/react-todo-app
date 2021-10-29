import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { getDesignTokens } from "./style/Theme";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import { AppContext } from "./context/AppContext";
import { createTheme } from "@mui/material/styles";
import ThemeModeButton from "./components/ThemeModeButton";


function App() {
  const appContext = useContext(AppContext);
  const { appState } = appContext;

  const theme = createTheme(getDesignTokens(appState.mode));

  return (
    <ThemeProvider theme={theme}>
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
          <ThemeModeButton/>
    </ThemeProvider>
  );
}

export default App;
