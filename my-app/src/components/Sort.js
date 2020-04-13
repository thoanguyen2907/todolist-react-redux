import React from 'react';
import {connect} from "react-redux"; 
import sort from './../reducers/sort';
import {actSort} from './../actions/index';

class Sort extends React.Component {
	constructor(props){
	super(props);
	this.handleSort = this.handleSort.bind(this);
}
handleSort(orderKind,orderDir){
this.props.handleSort(orderKind,orderDir)
}
render(){
	let {orderKind,orderDir} = this.props.sort;
return (

<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li>
							<a onClick={()=>this.handleSort('name','asc')} role="button">
								<span className="fa fa-sort-alpha-asc pr-5">
									Tên A-Z
								</span>
							</a>
						</li>
						<li>
							<a onClick={()=>this.handleSort('name','desc')} role="button">
								<span className="fa fa-sort-alpha-desc pr-5">
									Tên Z-A
								</span>
							</a>
						</li>
						<li role="separator" className="divider" />
							<li><a onClick={()=>this.handleSort('status','desc')} role="button">Trạng Thái Kích Hoạt</a></li>
							<li><a onClick={()=>this.handleSort('status','asc')} role="button">Trạng Thái Ẩn</a></li>
						</ul>
					</div>
				</div>
	
	)
	}
}
const mapStateToProps = state => {
  return {
   sort:state.sort
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		handleSort: (orderKind,orderDir) =>{
			dispatch(actSort(orderKind,orderDir))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort);


