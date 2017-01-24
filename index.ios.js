import React, { Component } from 'react';
import Header from './src/components/header';
import Sliders from './src/components/slider';
import MainPageInput from './src/components/mainpageinput';
import Home from './src/components/swiper';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './src/reducer';

import {
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FinanceApp extends React.Component {
  componentDidMount() {
    console.log('hello world')
  }

  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <Home />
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FinanceApp', () => FinanceApp);
