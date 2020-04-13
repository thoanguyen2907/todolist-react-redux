import React from 'react';
import Item from './Item';
import { connect } from 'react-redux'; 
import items from './../reducers/items';
import search from './../reducers/search';
import sort from './../reducers/sort';
import {includes,filter,orderBy} from 'lodash';
class  List extends React.Component { 

render(){
let {items,search,status} = this.props;
let {orderKind,orderDir} = this.props.sort;
let elmItem = null;
//search Item  by Name
let itemsOrigin = (items!==null)?items:[];
items = filter(itemsOrigin,(item)=>{
  return includes(item.name,search)
})
//Sort Item by name,status, as2c desc
items = orderBy(items,[orderKind],[orderDir]);


let filteredItems = [...items];
 if (status !== ''){
  items = filteredItems.filter((item) => {
  return item.status === status
})
} 


elmItem = items.map((item,index)=>{
  return  <Item key={index} item={item} index={index}/>
})
      
  return (
    <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>                   
                {elmItem}        
                  </tbody>
                </table>
                
              </div>
            </div>

  );
}
}
const mapStateToProps = state => {
  return {
    items: state.items,
   search:state.search,
   sort:state.sort,
   status:state.statusFilter
  }
}

export default connect(mapStateToProps,null)(List);
