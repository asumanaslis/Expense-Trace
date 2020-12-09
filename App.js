import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux';
import {Provider} from 'react-redux';

import Router from './src/Router';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
