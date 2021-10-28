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
          ({ location }) => (
            !user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location }
                }}
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;