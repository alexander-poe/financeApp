'use strict';
import React from 'react';
import Slider from 'react-native-slider';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class SliderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      value2: 1,
      value3: 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value) => this.setState({value})} />
        <Text>50%: $ { this.state.value }</Text>
         <Slider
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value2) => this.setState({value2})} />
        <Text>30%: $ { this.state.value2 }</Text>
         <Slider
          value={2}
          minimumValue={ 0 }
          maximumValue={ 200 }
          onValueChange={(value3) => this.setState({value3})} />
        <Text>20%: $ { this.state.value3 }</Text>
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

export default SliderExample;