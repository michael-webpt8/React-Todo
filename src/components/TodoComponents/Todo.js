import React from 'react';
import Styles from './Todo.css';

function Todo(props) {
	const { task } = props;
	return (
		<li
			onClick={props.todoToggle}
			className={task.completed ? ' completed' : ''}
		>
			{task.task}
		</li>
	);
}
export default Todo;
