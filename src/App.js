import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import User from './pages/user';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/home" />
          <Route render={() => <h2>404 Pages.</h2>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
