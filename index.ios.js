import React, { Component } from 'react'
import Header from './src/components/header'
import Sliders from './src/components/slider'
import MainPageInput from './src/components/mainpageinput'
import Home from './src/components/home'
import Test from './src/components/reducertest'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/reducers'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


 

    const store = createStore(reducers, {}, applyMiddleware(thunk));
export default class FinanceApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
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
