import React from 'react';
import ReactDOM from 'react-dom';

import './components/assets/global.scss'
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Routes from './routes.js'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
