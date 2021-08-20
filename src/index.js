import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';


axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

