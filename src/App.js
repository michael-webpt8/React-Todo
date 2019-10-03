import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Plan Todo List',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Work on Project',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addItem = (e, taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
