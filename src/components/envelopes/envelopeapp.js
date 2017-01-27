'use strict';
var styles = require('./styles/styles');
var EnvelopeContainer = require('./envelopecontainer');
import React from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'

class EnvelopeApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: EnvelopeContainer, title: 'Envelopes'}}/>
        );
    }
}

export default EnvelopeApp;