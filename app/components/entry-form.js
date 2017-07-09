'use strict';

import React from 'react';

class EntryForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      currentValue: '',
      newValue: '',
    }
  }
  handleChange1(event){
    this.setState({
      currentValue: event.target.value
    })
  }
  handleChange2(event){
    this.setState({
      newValue: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
  }
	render(){
    return (
      <form onSubmit={this.handleSubmit} className='entry-form'>
          <div className='question'>
            What's your car worth?
          </div>
          <input 
            className='v-input'
            type='text'
            onChange={this.handleChange1}
          />
          <div className='question'>
            How much do you want to spend on a new car?
          </div>
          <input 
            className='v-input'
            type='text'
            onChange={this.handleChange2}
          />
          <button 
            className='form-submit-button'
            onClick={ () => this.props.didClick( this.state.currentValue, this.state.newValue ) }
            type='submit'>
            submit
          </button>
      </form>
      )
  }
}

export default EntryForm