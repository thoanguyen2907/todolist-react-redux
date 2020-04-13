import * as types from './../constants/ActionTypes.js';

let initialDefault = '';

const search = (state=initialDefault, action) => {
	switch(action.type){
		case types.CHANGE_SEARCH:
			return action.search;
		default:
			return state
	}
}
export default search;