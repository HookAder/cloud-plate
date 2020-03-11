import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Files from './components/files';
import About from './components/about';
import './index.scss';
import './style';

const Home = () => {
  return (
    <div className="home">
     <Switch>
      <Route path="/home/files" component={Files} />
      <Route path="/home/about" component={About} />
      <Redirect exact from="/home" to="/home/files" />
     </Switch>
    </div>
  );
}

export default Home;