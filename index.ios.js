import React, { Component } from 'react';
import Header from './src/components/header';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let pic = {
  uri:  'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
}

export default class FinanceApp extends React.Component {
  render() {
    return (

      <Header title="Alex Poe"/>

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
