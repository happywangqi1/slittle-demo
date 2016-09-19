import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import 'highlight.js/styles/gruvbox-dark.css'
// import Marked from './Marked';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Routers />, document.getElementById('app'));
// ReactDOM.render(<Marked />, document.getElementById('app'));
