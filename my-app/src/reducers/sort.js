import * as types from './../constants/ActionTypes.js';

let inititalDefault ={orderKind:'name',orderDir:1}; 

const sort = (state =inititalDefault ,action) => {
	let {orderKind,orderDir} = action; 
		switch(action.type) {
			case types.SORT_ITEM:
				
				return {orderKind,orderDir}
			default:
				return state
		}
}
export default sort; 