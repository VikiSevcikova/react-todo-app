import {
    Route,
    Redirect
  } from 'react-router-dom';
import { getFromLocalStorage } from '../Utils';
  
  function PublicRoute({ component: Component, ...rest }) {
    const user = getFromLocalStorage('loggedInUser');

    return (
      <Route
        {...rest}
        render={
          (props) => (
            !user ? (
              <Component {...props}/>
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