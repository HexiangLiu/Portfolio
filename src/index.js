import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainProvider } from './context';

import App from './App';

ReactDOM.render(
  <MainProvider>
    <Router>
      <App />
    </Router>
  </MainProvider>,
  document.getElementById('root')
);
