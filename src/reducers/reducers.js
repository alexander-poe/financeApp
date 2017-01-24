import React from 'react';
import * as actions from '../actions/actions';

const initState = {
		essentials: 1000,
		flex: 'ea',
		LTS: 100000,
		date: '11/11/1111'
	};

const reducer = (state=initState, action) => {
	switch (action.type) {
		case 'GET_DATA_SUCCESS' :
			console.log('did it');
			//divy up money here, save in var
			//return to each respective 
			//ess, flex, lts
			console.log(action.data)
			return {
				...state,
				flex: action.data
			}
	}
}

export default reducer;