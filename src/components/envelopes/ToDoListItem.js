'use strict';
var styles = require('./styles/styles');
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native';
import Sliders from './envslider'


class ToDoListItem extends React.Component {
    render() {
        var item = this.props.item;
        console.log(item)
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        <Text
                            style={[styles.txt, item.complete && styles.completed]}>
                            Title: ({item.txt}) 
                            Cost: (${item.cost})

                        </Text>
                        <Sliders />
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

module.exports = ToDoListItem;