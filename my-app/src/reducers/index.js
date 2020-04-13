import { combineReducers } from 'redux';
import items from './items';
import isShowForm from './isShowForm';
import search from './search';
import sort from './sort';
import itemSelected from './itemSelected';
import statusFilter from './statusFilter'; 
const appReducers = combineReducers({
items,
isShowForm,
search,
sort,
itemSelected,
statusFilter

})
export default appReducers;