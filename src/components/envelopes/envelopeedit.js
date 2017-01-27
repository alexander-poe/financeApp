'use strict';
import React from 'react'
var styles = require('./styles/styles');
var t = require('tcomb-form-native');
import { View, TouchableHighlight, Text } from 'react-native';
var Form = t.form.Form;

var ToDo = t.struct({title: t.String, totalamount: t.String, resetdate: t.maybe(t.String)});

var options = {
    fields: {
        txt: {
            label: 'Envelope',
            placeholder: 'enter a envelope',
            autoFocus: true
        }
    }
};

class EnvelopeEdit extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        if (value) {
            this.props.update(value, this.props.id);
        }
    }

    render() {
        return (
            <View style={styles.todo}>
                <Form
                    ref="form"
                    type={ToDo}
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


module.exports = EnvelopeEdit;