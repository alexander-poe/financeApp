import React from 'React';
import { 
	Text,
	View,
	Button,
	TextInput
} from 'react-native';

class MainPageInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			payment: 0,
			nextPay: 'mm/dd/yyyy'
		}
	}
	//this will dispatch information to the backend
	//on the backend all the alogrithms will be set up for
	//keeping track of reset date
	render() {
		const { viewStyle, textStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text> Amount: {this.state.payment } </Text>
				<Text> End Pay Period On: {this.state.nextPay } </Text>
				<TextInput
					style={{ height: 40, alignItems: 'center' }}
					placeholder="$2000.00"
					keyboardType='numeric'
					onChangeText={ (payment) => this.setState({ payment }) }
				/>
				<TextInput
					style={{ height: 40 }}
					placeholder="mm/dd/yyyy"
					keyboardType='numeric'
					onChangeText={ (nextPay) => this.setState({ nextPay }) }
				/>
			</View>		
			)
	}
}
const styles = {
	viewStyle : {
      	flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
	},
	textStyle: {
		fontSize: 20
	}
};

export default MainPageInput;