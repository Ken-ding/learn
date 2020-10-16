import React from "react";
import { connect } from "react-redux";
import { addTodo } from "actions";

class AddTodo extends React.Component {
  render() {
    let input;
    return (
      <form
        onClick={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          this.props.dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
