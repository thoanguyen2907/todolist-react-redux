import React, { Component } from 'react';
import {connect} from "react-redux"; 
import {actFilterStatus} from './../actions/index';
class StatusFilter extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
      }
   
    handleFilter(status) {
         this.props.handleFilter(status)
      }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         <div className="dropdown">
				<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				Filter Status <span className="fa fa-caret-square-o-down ml-5" />
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li>
							<a onClick={()=>this.handleFilter('')} role="button">
								<span className="fa fa-sort-alpha-asc pr-5">
									All
								</span>
							</a>
						</li>
						<li>
							<a  onClick={()=>this.handleFilter(1)}role="button">
								<span className="fa fa-sort-alpha-desc pr-5">
									InActive
								</span>
							</a>
						</li>
                        <li>
							<a  onClick={()=>this.handleFilter(0)} role="button">
								<span className="fa fa-sort-alpha-desc pr-5">
								Active
								</span>
							</a>
						</li>
						</ul>
					</div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
     status: state.statusFilter
    }
  }
  const mapDispatchToProps = (dispatch,ownProps) => {
      return {
        handleFilter: (status) =>{
              dispatch(actFilterStatus(status))
          }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(StatusFilter);
