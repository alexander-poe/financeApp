'use strict';
var styles = require('./styles/styles');
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native';
import Sliders from './sliders'


class MainItem extends React.Component {
    render() {
        var item = this.props.item;
        console.log('item', item)
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        } 
        if(mm<10) {
            mm='0'+mm
        } 
        today = mm+'/'+dd+'/'+yyyy;
        return (
            <View style={styles.usermain}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        <Sliders cost={item.cost} bal={item.bal} />
                        <Text>
                            11 days left {"\n"}
                        </Text>
                        
                     
                    </View>
                </TouchableHighlight>
                <View/>
            </View>
        );
    }
}

module.exports = MainItem;