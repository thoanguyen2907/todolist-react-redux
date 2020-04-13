import React from 'react';
import Search from './Search';
import Sort from './Sort';
import { connect } from 'react-redux'; 
import isShowForm from './../reducers/isShowForm';
import {actToggleForm,actUnSelectItem} from './../actions/index';
import StatusFilter from './StatusFilter'; 
class  Control extends React.Component {
constructor(props){
	super(props);

		this.onToggleForm = this.onToggleForm.bind(this)	
}
onToggleForm(){
	this.props.onToggleForm();
}
render(){
let {isShowForm} = this.props
let elmButton = null;
if(isShowForm) {
elmButton = <button onClick = {this.onToggleForm} type="button" className="btn btn-success mb-3">
              <span />Close Form</button>
} else {
elmButton = <button onClick = {this.onToggleForm} type="button" className="btn btn-primary mb-3">
              <span />Add Form</button>
}
return (
<div>
	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-0">
		{elmButton}
    </div>
<div className="row">
	{/*FIND: START*/}
	<Search/>
	
	
</div>
<div className="row mt-2">
<Sort />
<StatusFilter/>
</div>

	</div>
			);
			}}
const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm,
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		onToggleForm: () =>{
			dispatch(actToggleForm());
			dispatch(actUnSelectItem())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Control);

