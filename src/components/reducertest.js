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
		console.log('sport')
		this.props.dispatch(actions.getDataSuccess('dog'));
	}
	render() {
		return (
			<Text> {this.props.flex} </Text>
			)
	}
}

const mapStateToProps = state => {
	console.log('test:', state)
	return {flex: state.flex}
};


export default connect(mapStateToProps)(Test);