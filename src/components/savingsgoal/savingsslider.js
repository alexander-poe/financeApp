'use strict';
import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-native-slider'
import * as actions from '../../actions/actions'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class SavingsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBal: 213
    }
  }
  sendEssen() {
    this.props.dispatch(actions.updateEssen(this.state.essen))
  }
  sendFlex() {
    this.props.dispatch(actions.updateFlex(this.state.flex))
  }
  sendLts() {
    this.props.dispatch(actions.updateLts(this.state.lts))
  }
  render() {
    return (
      <View style={styles.container}>
          <Text> 

            { this.props.bal } / { this.props.cost } {'\n'} 

          </Text> 

      </View>    
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, props) => ({
  essen: state.essen,
  flex: state.flex,
  lts: state.lts
});
export default connect(mapStateToProps)(SavingsSlider);