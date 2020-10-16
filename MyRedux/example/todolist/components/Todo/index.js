import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? "line-through" : "none",
        }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
