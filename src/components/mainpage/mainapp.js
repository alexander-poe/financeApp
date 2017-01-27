'use strict';
var styles = require('./styles/styles');
var MainContainer = require('./maincontainer');
import React from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'

class MainApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: MainContainer, title: 'User'}}/>
        );
    }
}

export default MainApp;