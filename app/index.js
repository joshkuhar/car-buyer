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
      currentValue: null,
      newValue: null,
      rate: .04,
      loanAmt: null
    }
  }
  _didClick(cv,nv){
    const amountToBorrow = difference(cv,nv)
    this.setState({
      currentValue: cv,
      newValue: nv,
      loanAmt: amountToBorrow
    })
  }
  render() {
    return(
      <div>
        <Entry 
          didClick={this._didClick}
        />
        <Table 
          price={this.state.price}
          cv={this.state.currentValue}
          nv={this.state.newValue}
          rate={this.state.rate}
          amt={this.state.loanAmt}
        />
      </div>
      )
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('app') 
);
