import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
    console.log(this.state.input);
  };

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default TodoForm;
