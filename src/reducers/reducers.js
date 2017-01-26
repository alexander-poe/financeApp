import React from 'react';
import * as actions from '../actions/actions';

const initState = {
		essentials: 1000,
		flex: 'easdfdsfsf',
		LTS: 100000,
		date: '11/11/1111'
	};

const reducer = (state=initState, action) => {
	switch (action.type) {
		case 'get_user_success' :
			return {
				...state, 
				essen: action.data.essen,
				flex: action.data.flex,
				lts: action.data.lts,
				expdate: action.data.expdate,
				currentData: action.data.currentData
			}	
		default : 
			return state;	
	}
}

export default reducer;