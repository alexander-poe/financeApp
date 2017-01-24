import React from 'react';
import Swiper from 'react-native-swiper';
import MainPageInput from './mainpageinput';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

class Home extends React.Component {

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  //so ill use this as the parent component, then render other components
  //in different views
  render() {
    return (

      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Savings Goal" />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.viewStyle()}>
            <TitleText label="Month" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="MainPage" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Archive" />
          </View>
        </Swiper>        
        <View style={this.viewStyle()}>
          <TitleText label="Envelopes" />
        </View>
      </Swiper>  

    )
  }
}

export default Home;