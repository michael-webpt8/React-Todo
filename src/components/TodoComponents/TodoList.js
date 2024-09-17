// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
	render() {
		const { tasks, todoToggle } = this.props;
		return (
			<ul>
				{tasks.map((task) => {
					return (
						<Todo
							key={task.id}
							task={task}
							todoToggle={(e) => todoToggle(e, task.id)}
						/>
					);
				})}
			</ul>
		);
	}
}
export default TodoList;
