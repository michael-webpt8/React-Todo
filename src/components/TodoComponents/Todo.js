import React from 'react';

function Todo(props) {
  const { task } = props;
  return <li>{task.task}</li>;
}
export default Todo;
