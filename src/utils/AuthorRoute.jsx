import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const AuthorRoute = ({component:Component,...rest}) => (
  <Route
    {...rest}
    render={props => {
      return window.localStorage.getItem('jwt_token')
      ? <Component {...props} />
      : <Redirect to="/login" />
    }}
  />
);

export default AuthorRoute;