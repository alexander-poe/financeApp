'use strict';
import React from 'react';
import Slider from 'react-native-slider';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 150,
      value2: 1,
      value3: 1
    }
  }

  //for sliders onSlidingComplete prop will be used to dispatch
  //an action and update the store, or current bank.

  //note: how can we make the slider start at a specific point?

  
  render() {
    return (
      <View style={styles.container}>
        <Slider
          step={1}
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value) => this.setState({value})} />
        <Text>Essentials: $ { this.state.value }</Text>
         <Slider
          step={1}
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value2) => this.setState({value2})} />
        <Text>Flexible: $ { this.state.value2 }</Text>
         <Slider
          step={1}
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value3) => this.setState({value3})} />
        <Text>Long-Term: $ { this.state.value3 }</Text>
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

export default Sliders;