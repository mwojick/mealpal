import React from 'react';
import ReactDOM from 'react-dom';
// import {login, logout, signup} from './util/session_api_util';
import {login} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  //set preloadedState to current user if there is one
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING START:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  //TESTING END:

  ReactDOM.render(<Root store={store}/>, root);
});
