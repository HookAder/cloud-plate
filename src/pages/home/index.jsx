import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Files from './components/files';
import About from './components/about';
import './index.scss';
import './style';

// 临时组件接受数据
const Child = (props) => {
  const { data } = props.location;
  
  return <h2 className="animated fadeInLeftBig">Welcome to {data}</h2>;
}

const Home = () => {
  return (
    <div className="home">
     <Switch>
      <Route exact path="/home/files" component={Files} />
      <Route path="/home/files/:folder" component={Child} />
      <Route path="/home/about" component={About} />
      <Route path="/home/*" render={() => <h2>Home 404 Pages.</h2>} />
      <Redirect exact from="/home" to="/home/files" />
     </Switch>
    </div>
  );
}

export default Home;