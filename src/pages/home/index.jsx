import React from 'react';
import { Route,Switch,Redirect,useParams } from 'react-router-dom';
import Files from './components/files';
import About from './components/about';
import './index.scss';
import './style';


const Child = () => {
  const {folder} = useParams();
  
  return <h2 className="animated fadeInLeftBig">Welcome to {folder}</h2>;
}

const Home = () => {
  return (
    <div className="home">
     <Switch>
      <Route exact path="/home/files" component={Files} />
      <Route path="/home/files/:folder" component={Child} />
      <Route path="/home/about" component={About} />
      <Redirect exact from="/home" to="/home/files" />
     </Switch>
    </div>
  );
}

export default Home;