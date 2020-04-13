import * as types from './../constants/ActionTypes.js';
import {remove,reject} from 'lodash';
import * as config from './../constants/Config';
const uuidv4 = require('uuid/v4');
let initialDefault = [];
let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE));
initialDefault = (tasks!==null && tasks.length>0)? tasks : initialDefault;
const items = (state = initialDefault,action) => {
	let id = null;
	switch (action.type) {
		case types.DELETE_ITEM:	
		id=action.id
  	remove(state,(item)=>{
    return item.id === id
  });
 localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE,JSON.stringify(state))	
	return [...state];
		case types.SUBMIT_FORM:	
		let item = action.item;
		if(item.id !== '') { //edit
			id = item.id;
             state= reject(state, { id: item.id});  
        } else {
			id = uuidv4()
	}
		state.push({
            id      : id,
            name    : item.name,
            status   : +item.status
        }) 

 localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE,JSON.stringify(state))
			return [...state];
		default:
			return state
	}
	
}
export default items; 