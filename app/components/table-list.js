'use strict';

import React from 'react';
import Row from './table-row';

class TableList extends React.Component {
	render(){		
		const nper = this.props.nper //length of loan in months
		const rate = this.props.rate/100/12 //interest rate per month
		const pv = this.props.pv //present value of loan
		const ar = this.props.ar/100 //ar-annual rate
		const ih = this.props.ih //ih-investment horizon

		// Auto loan
		function pmt(rate, nper, pv){
			var pvif= Math.pow( 1 + rate, nper)
			var pmt = rate / (pvif - 1) * -(pv*pvif);
			return pmt
		}
		const pymt = pmt(rate,nper,-pv) //make sure third arg is negative

		// Compount Interest
		function fv(rate,yrs,pv) {
			var fv = pv;
			for(var i=0; i<yrs; i++){
				var yearlyInterest = fv*rate
				fv += yearlyInterest
			}
			return fv
		}
		
		//Turn into formatted dollar string
		function toDollars(num){
			var num = parseFloat(num).toFixed(0)
			var nextNum = Number(num).toLocaleString()
			return nextNum
		}

		const years = []
		const singleYear = pymt*12

		for(var i=1;i<6;i++){

			const rr = singleYear*i
			const b = toDollars(rr)
			const bought = parseFloat(rr).toFixed(2)

			const invested = fv(ar,ih,rr)
			const invested15 = fv(ar,ih-15,rr)
			const diff = toDollars(invested-invested15)

			// const diffTo = parseFloat(diff).toFixed(2)
			// const num = Number(diffInvest).toLocaleString()
			years.push({
				bought: b, 
				invested: diff
			})
		}

		const paidPerYear = years.map( (r,i)=>{
			return (
				<Row 
					key={i}
					year={i+1}
					bought={r.bought}
					saved={r.invested}
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