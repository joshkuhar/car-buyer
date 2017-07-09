'use strict';

import React from 'react';
import TableList from './table-list'

class Table extends React.Component {
  constructor(props){
    super(props)
    // this._onDelete = this._onDelete.bind(this)
    // this.state = {
    //   colors: []
    // }
  }
  // _removeColor(colorId){
  //   var colors = this.state.colors
  //   for(var i in colors){
  //     if(colorId == colors[i].id){
  //       colors.splice(i, 1)
  //     }
  //   }
  //   this.setState({
  //     colors: colors
  //   })    
  // }
  // _onDelete(colorId) {
  //   fetch('/colors/'+colorId, { 
  //     method: 'DELETE' 
  //   })
  //   .then( (res) => {
  //     // With fetch, 500
  //     // must be handled manually
  //     if(!res.ok){
  //       throw Error(res.statusText)
  //     }
  //     return res
  //   })
  //   .then( () => {
  //     this._removeColor(colorId)
  //     return
  //   })
  //   .catch( (err) => {
  //     console.log(err)
  //   })
  // }
  render() {
    return (
      <div>
      	<div className='price'>
      		Current Value
      	</div>
      	<div className='v-num'>
      		{this.props.cv}
      	</div>
      	<div className='price'>
      		Purchase price
      	</div>
      	<div className='v-num'>
      		{this.props.nv}
      	</div>
      	<div className='price'>
      		You will have to borrow this much money to purchase your new car.
      	</div>
        <div className='borrowing'>
        	{this.props.price}
        </div>
        <table>
        	<thead>
        		<tr>
        			<th>Years</th>
        			<th>Bought</th>
        			<th>Kept</th>
        		</tr>
        	</thead>
	        <TableList 
						rate={this.props.rate}
						amt={this.props.amt}
	        />
        </table>
      </div>
      )
  }
}

export default Table


/*


        <table className='table-container'>
          <Rows 
            colors={this.state.colors}
            onDelete={this._onDelete}
          />
       </table>




*/