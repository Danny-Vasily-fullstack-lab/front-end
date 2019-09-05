import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import AuthProvider from './AuthProvider';

render(
  <AuthProvider
    domain='vasily-markov1993.auth0.com'
    client_id='Q48Z57tNLN2w3r935iciEeDcO6qzocbb'
    redirect_uri='http://localhost:7890'
  >
    <Provider store={store} >
      <App  />
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
