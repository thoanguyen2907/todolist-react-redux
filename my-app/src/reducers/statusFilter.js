import * as types from './../constants/ActionTypes.js';

let inititalDefault =''; 

const statusFilter = (state =inititalDefault ,action) => {
		switch(action.type) {
			case types.FILTER_STATUS:
				return action.status
			default:
				return state
		}
}
export default statusFilter; 