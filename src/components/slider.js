'use strict';
import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-native-slider'
import * as actions from '../actions/actions'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      essen: 1,
      flex: 1,
      lts: 1
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
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
              minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          onSlidingComplete={ this.sendEssen.bind(this) }
          onValueChange={ (essen) => this.setState({ essen }) }
        />
          <Text>Essentials: ${ this.state.value }</Text>
        <Slider
          step={1}
          value={200}
          minimumValue={ 0 }
          maximumValue={ 200 }
          minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          onSlidingComplete={ this.sendFlex.bind(this) }
          onValueChange={(flex) => this.setState({ flex })} 
        />
          <Text>Flexible: ${ this.state.flex }</Text>
        <Slider
          step={1}
          value={200}
          minimumValue={ 0 }
          maximumValue={ 200 }
              minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          onSlidingComplete={ this.sendLts.bind(this) }
          onValueChange={(lts) => this.setState({ lts })} 
        />
            <Text>Long-Term: ${ this.state.lts }</Text>
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
export default connect(mapStateToProps)(Sliders);