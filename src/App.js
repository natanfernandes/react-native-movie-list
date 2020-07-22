import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import movieReducer from './state/reducer';
import Home from './screens/Home';

const logger = createLogger();
const store = createStore(movieReducer, applyMiddleware(promise, logger));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home></Home>
      </SafeAreaView>
    </Provider>
  );
};


export default App;
