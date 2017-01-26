'use strict';
var styles = require('./styles/styles');
var ToDoListContainer = require('./ToDoListContainer');
import React from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'

class ToDoApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: ToDoListContainer, title: 'Envelopes'}}/>
        );
    }
}

export default ToDoApp;