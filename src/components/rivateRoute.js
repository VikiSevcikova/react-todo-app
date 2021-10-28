import { Redirect, Route } from "react-router-dom";
import { getFromLocalStorage } from "../Utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = getFromLocalStorage("loggedInUser");
  console.log("private route")
  console.log(user)
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
