import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Promise from 'promise-polyfill';
import "babel-polyfill";
import './resources/css/reset.css';
import './resources/css/common.css';
import './resources/css/board.css';
import App from './component/app/App';
 
if (!window.Promise) {
  window.Promise = Promise;
}

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
console.log('===================== index.js ======================')
// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));