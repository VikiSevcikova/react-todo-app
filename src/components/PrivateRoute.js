import { Redirect, Route } from "react-router-dom";
import { getFromLocalStorage } from "../Utils";
import Users from "./Users";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = getFromLocalStorage("loggedInUser");
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
