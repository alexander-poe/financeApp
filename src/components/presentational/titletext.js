import React from 'react'
import {
	View,
	Text
} from 'react-native'

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

export default TitleText;