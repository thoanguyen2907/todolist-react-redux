import React from 'react';
import { connect } from 'react-redux';
import {actSearch} from './../actions/index';
import search from './../reducers/search';


class Search extends React.Component {
constructor(props){
	super(props);
	this.state=({
		strSearch:''
	})
	this.handleChange = this.handleChange.bind(this);
	this.handleSearch = this.handleSearch.bind(this);
	this.handleClear = this.handleClear.bind(this);
}

handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
 handleSearch(search){
	 this.props.handleSearch(this.state.strSearch);
 }

 handleClear(){
	this.props.handleSearch('');
 	this.setState({
 		strSearch:''
 	})
 }
render(){ 
	
let strSearch = (this.state.strSearch!=='')?this.state.strSearch:this.props.search;

return (

<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
	<div className="input-group">
		<input name="strSearch" value={strSearch} onChange={this.handleChange}  type="text" className="form-control" placeholder="Nhập từ khóa..." 
		ref="search"/>
		<span className="input-group-btn">
			<button onClick={this.handleSearch}className="btn btn-primary" type="button">
			<span className="fa fa-search mr-5" />Tìm
				</button>
				<button onClick={this.handleClear}className="btn btn-warning ml-2" type="button">
			<span className="fa fa-search mr-5" />Clear
				</button>
			</span>
	</div>

	
</div>
	
	)
	}
}
const mapStateToProps = state => {
  return {
   search:state.search,
   status: state.statusFilter
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		handleSearch: (search) =>{
			dispatch(actSearch(search))
		},
		handleClear:()=>{
			dispatch(actSearch(''))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);


