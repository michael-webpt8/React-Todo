import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addItem(e, this.state.input);

    this.setState({
      input: ''
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type='submit'>Add Todo</button>
        <button type='button' onClick={this.props.removeItem}>
          Clear Completed
        </button>
      </form>
    );
  }
}
export default TodoForm;
