'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/table'
import Entry from './components/entry-form'
import {
  difference
} from './helpers/helpers'

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this._didClick = this._didClick.bind(this)
    this.state = {
      carCurrentValue: null,
      carNewValue: null,
      nper: 60,
      rate: 4,
      pv: 30000,
      ar: 7.5,
      ih: 20
    }
  }
  _didClick(cv,nv){
    const amountToBorrow = difference(cv,nv)
    this.setState({
      carCurrentValue: cv,
      carNewValue: nv,
      pv: amountToBorrow
      // pv: amountToBorrow
    })
  }
  render() {
    return(
      <div>
        <Entry 
          didClick={this._didClick}
        />
        <Table 
          cv={this.state.carCurrentValue}
          nv={this.state.carNewValue}
          nper={this.state.nper}
          rate={this.state.rate}
          pv={this.state.pv}
          ar={this.state.ar}
          ih={this.state.ih}
        />
      </div>
      )
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('app') 
);
