import {
    Route,
    Redirect
  } from 'react-router-dom';
import { getFromLocalStorage } from '../Utils';
  
  function PublicRoute({ children, ...rest }) {
    const user = getFromLocalStorage('loggedInUser');

    return (
      <Route
        {...rest}
        render={
          () => (
            !user ? (
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