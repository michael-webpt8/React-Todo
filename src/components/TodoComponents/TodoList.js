// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
  constructor() {
    super();
  }
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task, i) => {
          return <Todo key={i} task={task} />;
        })}
      </ul>
    );
  }
}
export default TodoList;
