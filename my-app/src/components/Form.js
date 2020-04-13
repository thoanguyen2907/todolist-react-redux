import React from 'react';
import { connect } from 'react-redux'; 
import isShowForm from './../reducers/isShowForm';
import itemSelected from './../reducers/itemSelected';
import {actCloseForm,actSubmitForm,actUnSelectItem} from './../actions/index';

class  Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task_id: null,
      task_name:'',
      task_status:0
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleCancel(){
  this.props.handleCancel();
}
 
handleSubmit(event) {
    let item = {
      id:this.state.task_id,
      name:this.state.task_name,
      status:this.state.task_status
    }
    this.props.handleSubmit(item)
    event.preventDefault();
  }
    handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
UNSAFE_componentWillMount(){
let item = this.props.itemSelected;
if(item!==null){
     this.setState({
        task_id: item.id,
        task_name: item.name,
        task_status: item.status
     })
}
}
UNSAFE_componentWillReceiveProps(nextProps){
nextProps = nextProps.itemSelected;
if(nextProps!==null){
     this.setState({
        task_id: nextProps.id,
        task_name: nextProps.name,
        task_status: nextProps.status
     })
}  }
 render(){

let {isShowForm,itemSelected} =this.props;

if(isShowForm===false)  return null
return (
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
  <div className="panel panel-warning">
    <div className="panel-heading">
      <h3 className="panel-title">Thêm Công Việc</h3>
    </div>
    <div className="panel-body">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Tên :</label>
          <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" />
        </div>
        <label>Trạng Thái :</label>
        <select name="task_status" value={this.state.task_status} onChange={this.handleChange} className="form-control" required="required">
          <option value={1}>Kích Hoạt</option>
          <option value={0}>Ẩn</option>
        </select>
        <br />
        <div className="text-center">
          <button type="submit" className="btn btn-warning">Add</button>&nbsp;
          <button onClick ={this.handleCancel}type="submit" className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
);
}
}
const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm,
    itemSelected:state.itemSelected
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleCancel: () =>{
      dispatch(actCloseForm());
      dispatch(actUnSelectItem())
    },
    handleSubmit:(item)=>{
      dispatch(actSubmitForm(item))
      dispatch(actCloseForm())
    }

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);



