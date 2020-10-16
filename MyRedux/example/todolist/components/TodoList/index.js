import React from "react";
import Todo from "components/Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          ></Todo>
        ))}
      </ul>
    );
  }
}

export default TodoList;
