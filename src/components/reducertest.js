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
		this.props.dispatch(actions.updateEnv('1', '2322'));
	}
	render() {
		return (
			<Text> {this.props.title} </Text>
			)
	}
}

const mapStateToProps = (state, props) => ({
	essen: state.essen,
	flex: state.flex,
	lts: state.lts,
	title: state.title
});


export default connect(mapStateToProps)(Test);