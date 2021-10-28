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
          () => (
            user
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