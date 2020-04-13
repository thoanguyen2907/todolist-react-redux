import * as types from './../constants/ActionTypes.js';

let inititalDefault ={id:null,name:'',status:0}; 

const itemSelected = (state =inititalDefault ,action) => {
	
		switch(action.type) {
			case types.SELECTED_ITEM:
				return action.item
			case types.UNSELECT_ITEM:
				return {id:'',name:'',status:0}
			default:
				return state
		}
}
export default itemSelected; 