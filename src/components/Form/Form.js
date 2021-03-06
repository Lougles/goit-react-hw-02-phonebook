import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numInputId = shortid.generate();
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value});
  };
    handleSubmit = event => {
      event.preventDefault();
      const id = shortid.generate();
      console.log(id);
      const data = {
        ...this.state, id
      }
      console.log(data);
      this.props.onSubmit(data);
      this.reset();
  }

  reset = () => {
    this.setState({name: '',number: ''});
  };

  render() { 
    return ( 
        <form  onSubmit={this.handleSubmit}>
          <label >
            Name <input type="text" name="name" value={this.state.name} onChange={ this.handleChange}/>
          </label>
          <br/>
          <label >
            Num <input type="text" name="number" value={this.state.number} onChange={ this.handleChange}/>
          </label>
          <br/>
          <button type="submit">Add Contact</button>
        </form>
     );
  }
}
 

export default Form;