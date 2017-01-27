
'use strict';
import React from 'react'
import { connect } from 'react-redux'
import styles from './styles/styles'
import t from 'tcomb-form-native'
import * as actions from '../../actions/actions'
import { View, TouchableHighlight, Text } from 'react-native';
var Form = t.form.Form;

var Update = t.struct({add: t.String, from: t.String});

var options = {
    fields: {
        txt: {
            label: 'Payment',
            placeholder: 'enter payment',
            autoFocus: true
        }
    }
};

class SavingsUpdate extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        let essen = Math.floor(value.payment * .5)
        let flex = Math.floor(value.payment * .3)
        let lts = Math.floor(value.payment * .2)
        this.props.dispatch(actions.addPayment(essen, flex, lts, value.exp_date))
    }

    render() {
        return (
            <View style={styles.todo}>
                <Form
                    ref="form"
                    type={Update}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.item}/>
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={this.onUpdate}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


export default connect()(SavingsUpdate);