import {
    Route,
    Redirect
  } from 'react-router-dom';
import { getFromLocalStorage } from '../Utils';
  
  function PrivateRoute({ component: Component, ...rest }) {
    const user = getFromLocalStorage('loggedInUser');
    return (
      <Route
        {...rest}
        render={
          (props) => (
            user
              ? (
                <Component {...props}/>
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;