import React from 'react';
import * as actions from '../actions/actions';

const initState = {
		data: [],
		data2: [],
		data3: []
	};

const reducer = (state=initState, action) => {
	switch (action.type) {
		case 'get_user_success' :
			return {
				...state, 
				data: action.data
			
			};
		case 'get_savings_goal_success' :
			return {
				...state,
				data2: action.data
			};
		case 'get_envelopes_success' :
			return {
				...state,
				data3: action.env
			};		
		default : 
			return state;	
	}
}

export default reducer;