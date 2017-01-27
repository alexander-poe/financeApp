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

class EnvSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBal: 213
    }
  }
  sendEssen() {
    console.log('sE', this.props.essen)
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
        <Slider
          step={1}
          value={parseInt(this.props.bal)}
          minimumValue={ 0 }
          maximumValue={ this.props.cost }
          onSlidingComplete={ this.sendEssen.bind(this) }
          onValueChange={ (essen) => this.setState({ essen }) }
        />
          <Text>Amount till reached: ${ this.props.cost - this.props.bal}</Text>
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
export default connect(mapStateToProps)(EnvSlider);