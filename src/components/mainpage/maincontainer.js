'use strict';
import styles from './styles/styles'
import React from 'react'
import MainList from './mainlist'
import MainEdit from './mainedit'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import MainUpdate from './mainupdate'
import { Text, View, ListView, TouchableHighlight, AlertIOS } from 'react-native'
import Sliders from './sliders'

var data = [];
class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { txt: 'Ren', cost: '1000', bal: '900', date: '11/11/1111', complete: false },
                { txt: 'Auto', cost: '1000', bal: '200', date: '11/11/1111', complete: false }
            ]
        };
        this.alertMenu = this.alertMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);

    }
    onComponentDidMount() {
        this.props.dispatch(actions.getUserData())
            // .then(() => data = this.props.data.map(function(obj) {
            //     return obj
            // }))


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

    openItem(rowData, rowID) {
        this.props.navigator.push({
            title: 'Fill Up',
            component: MainUpdate,
            passProps: {item: rowData, id: rowID, update: this.updateItem}
        });
    }

    render() {
    if (this.props.data !== undefined) {
        var array = this.props.data.map(function(item) {
            console.log(item.essen)
            const essen = item.essen
            const flex = item.flex
            return item;
        })

    }
        return (
            <View style={{flex:1}}>
                <MainList
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

const mapStateToProps = (state, props) => {
    console.log('88',state.data)
    return {
    data: state.data
}
}

export default connect(mapStateToProps)(MainContainer)