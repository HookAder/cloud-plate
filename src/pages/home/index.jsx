import React from 'react';
import { Route,Switch } from 'react-router-dom';
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
     </Switch>
    </div>
  );
}

export default Home;