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
	switch (action.type) {
		case 'get_user_success' :
		    console.log('reducer', action.data.money[0])
			return {
				...state, 
				essen: action.data.money[0].essen,
				flex: action.data.money[0].flex,
				lts: action.data.money[0].lts,
				expdate: action.data.money[0].expdate,
				currentData: action.data.money[0].currentData
			};	
		default : 
			return state;	
	}
}

export default reducer;