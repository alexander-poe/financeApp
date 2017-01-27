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

class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      essen: 200,
      flex: 200,
      lts: 200
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
        <Text>Essentials: { this.state.essen } / {200} </Text>
        <Slider
          step={1}
          value={200}
          style={styles.styless}
          thumbTouchSize={{width: 20, height: 20}}
          minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onSlidingComplete={ this.sendEssen.bind(this) }
          onValueChange={ (essen) => this.setState({ essen: essen }) }
        />
        <Text>Flexible: { this.state.flex } / {200} </Text>  
          
        <Slider
          step={1}
          style={styles.styless}
          value={200}
          minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onSlidingComplete={ this.sendFlex.bind(this) }
          onValueChange={(flex) => this.setState({ flex: flex })} 
        />
         <Text>Long-Term: { this.state.lts } / {200}</Text>
        <Slider
          style={styles.styless}
          step={1}
          value={200}  
          minimumTrackTintColor={'rgb(248,248,248)'}
          maximumTrackTintColor={'rgb(248,248,248)'}
          thumbTintColor={'pink'}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onSlidingComplete={ this.sendLts.bind(this) }
          onValueChange={(lts) => this.setState({ lts: lts })} 
        />
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
  thumbStyle: {
    backgroundColor: 'pink'
  },
  styless: {
    flex: 1,
    justifyContent: 'center',
   
    height: 23,
    borderRadius: 10,
    width: 380

  },
  textcool: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  } 
});
const mapStateToProps = (state, props) => ({
  essen: state.essen,
  flex: state.flex,
  lts: state.lts
});
export default connect(mapStateToProps)(Sliders);