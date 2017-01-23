/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

export default class FinanceApp extends Component {
  render() {
    return (

       <Image source={pic} style={{width: 500, height: 800}}>
        <Text style={{alignItems: 'center', color: 'red'}}>
         ALex POe 
        </Text>
      </Image>  

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
