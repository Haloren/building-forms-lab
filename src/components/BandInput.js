// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {name: ''}

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand({...this.state}) 

    this.setState({name: ''})
  }

  render() {
    // console.log(this.state.name)
    return(
      <div>
        {/* Band Input */}
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} value={this.state.name} type='text' placeholder='Add Band'></input>
          <input type='submit'></input>
        </form>

        {this.state.name}
      </div>
    )
  }
}

export default (BandInput);
