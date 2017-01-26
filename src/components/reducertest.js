import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {
	Text,
	View
} from 'react-native';

class Test extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		this.props.dispatch(actions.getUserData())
	}
	render() {
		return (
			<Text> {this.props.flex} </Text>
			)
	}
}

const mapStateToProps = (state, props) => ({
	essen: state.essen,
	flex: state.flex,
	lts: state.lts
});


export default connect(mapStateToProps)(Test);