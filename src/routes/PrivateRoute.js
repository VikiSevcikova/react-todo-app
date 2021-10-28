import {
    Route,
    Redirect
  } from 'react-router-dom';
import { getFromLocalStorage } from '../Utils';
  
  function PrivateRoute({ children, ...rest }) {
    const user = getFromLocalStorage('loggedInUser');
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            user
              ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;