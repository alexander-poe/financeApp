'use strict';
import styles from './styles/styles'
import React from 'react'
import EnvelopeList from './envelopelist'
import EnvelopeEdit from './envelopeedit'
import EnvelopeUpdate from './envelopeupdate'
import { Text, View, ListView, TouchableHighlight, AlertIOS } from 'react-native'
import Sliders from '../slider'
class EnvelopeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { txt: 'Rent', cost: '1000', bal: '900', date: '11/11/1111', complete: false },
                { txt: 'Auto', cost: '1000', bal: '200', date: '11/11/1111', complete: false }
            ]
        };
        this.alertMenu = this.alertMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);
        this.addPayment = this.addPayment.bind(this);

    }
    alertMenu(rowData, rowID) {
        AlertIOS.alert(
            'Quick Menu',
            null,
            [
                {text: 'Delete', onPress: () => this.deleteItem(rowID)},
                {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
                {text: 'Cancel'}
            ]
        )
    }

    deleteItem(index) {
        var items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items})
    }

    addPayment(payment, key) {

    }

    updateItem(item, index) {
        var items = this.state.items;
        if (index) {
            items[index] = item;
        }
        else {
            items.push(item)
        }
        this.setState({items: items});
        this.props.navigator.pop();
    }
    // create new edit component on 62
    openItem(rowData, rowID) {
        this.props.navigator.push({
            title: rowData && rowData.txt || 'New Item',
            component: EnvelopeUpdate,
            passProps: {item: rowData, id: rowID, update: this.updateItem}
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <EnvelopeList
                    items={this.state.items}
                    onPressItem={this.openItem}
                    onLongPressItem={this.alertMenu}/>
                <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.openItem}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = EnvelopeContainer;