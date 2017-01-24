import React, { Component } from 'react';
import Header from './src/components/header';
import Sliders from './src/components/slider';
import MainPageInput from './src/components/mainpageinput';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FinanceApp extends React.Component {
  render() {
    return (
      <MainPageInput />
   

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
