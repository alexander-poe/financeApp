'use strict';
var styles = require('./styles/styles');
var SavingsContainer = require('./savingscontainer');
import React from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'

class SavingsApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: SavingsContainer, title: 'Savings Goal'}}/>
        );
    }
}

export default SavingsApp;