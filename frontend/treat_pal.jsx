import React from 'react';
import ReactDOM from 'react-dom';
import {fetchTreats, searchTreats} from './actions/treat_actions';
import {fetchCities} from './actions/city_actions';

import {updateUser} from './util/user_api_util';

// import {fetchTreats, searchTreats} from './util/treat_api_util';

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
  window.fetchTreats = fetchTreats;
  window.searchTreats = searchTreats;
  window.fetchCities = fetchCities;
  
  window.updateUser = updateUser;
  //TESTING END:

  ReactDOM.render(<Root store={store}/>, root);
});
