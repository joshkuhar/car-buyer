'use strict';

import React from 'react';
import Row from './table-row';


//console.log( "The calculated payment is: " + 
             // pmt(interest_rate/100/payments_per_year, payments_per_year * years, -loan_amount)
             // .toFixed(2) );
class TableList extends React.Component {
	render(){		
		const nper = 36 //length of loan in months
		const rate = 4.5/100/12 //interest rate per month
		const pv = 10000 //present value of loan
		function pmt(rate, nper, pv){
			var pvif= Math.pow( 1 + rate, 36)
			var pmt = rate / (pvif - 1) * -(pv*pvif);
			return pmt
		}
		console.log(pmt(rate, nper, -10000)) //make sure negative
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
					year={i+1}
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


P = rate per period (present value) / 1 - (1 + rate per period) - number of payments
*/