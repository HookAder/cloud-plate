import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
// import AuthorRoute from './utils/AuthorRoute';
import Loadable from './utils/loadable';
import store from './store';
// import Home from './pages/home';
import User from './pages/user';
import Login from './pages/login';
import Loading from './common/loading';
import NotFound from './pages/notfound';
// 懒加载首屏Home组件
const Home = Loadable(import('./pages/home'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <AuthorRoute path="/home" component={Home} /> */}
          {/* <AuthorRoute path="/user" component={User} /> */}
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/loding" component={Loading} />
          <Redirect exact from="/" to="/home" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
