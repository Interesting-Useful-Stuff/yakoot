import React from 'react';
import ReactDOM from 'react-dom';

//Import of global styles
import './assets/global.scss'
import './index.css';

//Import of Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Routes from './routes.js'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
