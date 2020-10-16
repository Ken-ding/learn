import React from "react";
import VisibleTodoList from "containers/VisibleTodoList";
import AddTodo from "components/AddTodo";
import Footer from "components/Footer";
import DemoView from "containers/DemoView";

class App extends React.Component {
  render() {
    return (
      <div>
        <DemoView/>
        <br/>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
export default App;
