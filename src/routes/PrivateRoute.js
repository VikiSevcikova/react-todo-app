import { useContext } from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
  
  function PrivateRoute({ children, ...rest }) {
    const userContext = useContext(UserContext);
    const { userState } = userContext;
    const { loggedInUser } = userState;
console.log(loggedInUser)
    return (
      <Route
        {...rest}
        render={
          () => (
            loggedInUser
              ? (
                children
              ) : (
                <Redirect
                  to={'/login'}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;