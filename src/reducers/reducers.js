import React from 'react';
import * as actions from '../actions/actions';

const initState = {
		essentials: 1000,
		flex: 'easdfdsfsf',
		LTS: 100000,
		date: '11/11/1111',
		expdate: '11/11/1111',
		currentDate: '11/11/1111'
	};

const reducer = (state=initState, action) => {
		console.log('redud', action.data)
	switch (action.type) {
		case 'get_user_success' :
			return {
				...state, 
				data: action.data
			
			};
		case 'get_savings_goal_success' :
			console.log('savings goal')
			return {
				...state,
				title: action.data.data[0].title,
				totalamount: action.data.data[0].totalamount,
			 	currentamount: action.data.data[0].totalamount,
			 	datedesired: action.data.data[0].totalamount,
			 	status: action.data.data[0].status
			};
		case 'get_envelopes_success' :
			console.log('env',action.env.env[0])
			return {
				...state,
				title: action.env.env[0].title,
				totalamount: action.env.env[0].totalamount,
				currentamount: action.env.env[0].currentamount,
				resetdate: action.env.env[0].resetdate
			};		
		default : 
			return state;	
	}
}

export default reducer;