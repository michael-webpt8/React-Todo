import React from 'react';

function Todo(props) {
  const { task } = props;
  return <li className='completed'>{task.task}</li>;
}
export default Todo;
