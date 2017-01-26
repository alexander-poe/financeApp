import React from 'react'
import Swiper from 'react-native-swiper'
import MainPageInput from './mainpageinput'
import { connect } from 'react-redux'
import Sliders from './slider'
import * as actions from '../actions/actions'
import TitleText from './presentational/titletext'
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  componentDidMount() {
    // this.props.dispatch(actions.getUserData())
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
            <Sliders />
            <MainPageInput />
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

export default connect()(Home);