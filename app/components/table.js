'use strict';

import React from 'react';
import TableList from './table-list'

class Table extends React.Component {
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
	          cv={this.props.carCurrentValue}
	          nv={this.props.carNewValue}
	          nper={this.props.nper}
	          rate={this.props.rate}
	          pv={this.props.pv}
	          ar={this.props.ar}
					  ih={this.props.ih}
	        />
        </table>
      </div>
      )
  }
}

export default Table


/*






*/