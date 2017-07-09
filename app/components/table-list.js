'use strict';

import React from 'react';
import Row from './table-row';

class TableList extends React.Component {
	render(){
		const years = []
		const singleYear = this.props.rate*this.props.amt
		for(var i=1;i<21;i++){
			const rr = singleYear*i
			years.push(parseFloat(rr).toFixed(2))
		}
		const paidPerYear = years.map( (r,i)=>{
			return (
				<Row 
					key={i}
					year={i}
					bought={r}
					saved='$2000'
				/>
				)
		})
		return(
			<tbody className='table-list'>
				{paidPerYear}
			</tbody>
			)
	}
}

export default TableList

/*



*/