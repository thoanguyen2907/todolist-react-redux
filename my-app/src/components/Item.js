import React from 'react';
import { connect } from 'react-redux'; 
import isShowForm from './../reducers/isShowForm';
import itemSelected from './../reducers/itemSelected'; 
import {actOpenForm,actDeteleItem,actSelectedItem} from './../actions/index';
class  Item extends React.Component {
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }
handleEdit(item){
  this.props.handleEdit(item);
}
onDelete(id){
  this.props.onDelete(id);
}
  render(){
   let {item,index} = this.props; 

  return (
   
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td className="text-center">
                        
                         {this.statusColor(item.status)}
                      
                      </td>
                      <td className="text-center">
                        <button onClick={()=>this.handleEdit(item)}type="button" className="btn btn-warning">
                          <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                        &nbsp;
                        <button onClick={()=>this.onDelete(item.id)}type="button" className="btn btn-danger">
                          <span className="fa fa-trash mr-5" />Xóa
                        </button>
                      </td>
                    </tr>

  )
}

statusColor(status){
  let color = <span className="badge badge-success">Active</span> 
  if(status===0){
     color = <span className="badge badge-warning">InActive</span> 
  }
  else {
   color = <span className="badge badge-success">Active</span> 
  }
  return color
}
}
const mapStateToProps = state => {
  return {
    items: state.items,
    isShowForm:state.isShowForm,
    itemSelected:state.itemSelected
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleEdit: (item) =>{
      dispatch(actOpenForm());
      dispatch(actSelectedItem(item))
    },
    onDelete: (id) => {
      dispatch(actDeteleItem(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);

