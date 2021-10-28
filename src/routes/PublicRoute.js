import { useContext } from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { getFromLocalStorage } from '../Utils';
  
  function PublicRoute({ children, ...rest }) {
    const userContext = useContext(UserContext);
    const { userState } = userContext;
    const { loggedInUser } = userState;

    return (
      <Route
        {...rest}
        render={
          () => (
            !loggedInUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                }}
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;