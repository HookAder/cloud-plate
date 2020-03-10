import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './static/roboto.css';
import './static/icon.css';
import 'antd/dist/antd.css';
import 'animate.css';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
