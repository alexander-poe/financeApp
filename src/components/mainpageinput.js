import React from 'React'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { 
	Text,
	View,
	Button,
	TextInput,
} from 'react-native'

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
	submitData() {
		let nextPay = this.state.nextPay
		let payment = this.state.payment
		let essen = payment * .5
		let flex = payment * .3
		let lts = payment * .2
		console.log(payment, 'poop', nextPay)
		this.props.dispatch(actions.addPayment(essen, flex, lts))
	}
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
				<Button
				    onPress={this.submitData.bind(this)}
				    title="Submit"
				    color="white"
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

const mapStateToProps = (state, props) => ({
	essen: state.essen,
	flex: state.flex,
	lts: state.l
});
export default connect(mapStateToProps)(MainPageInput);	