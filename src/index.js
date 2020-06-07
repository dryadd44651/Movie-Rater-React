import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';



const routing = (
  <BrowserRouter>
      <CookiesProvider>
          <Route exact path="/" component={Login} />
          <Route exact path="/movies" component={App} />
      </CookiesProvider>
  </BrowserRouter>
)



ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
