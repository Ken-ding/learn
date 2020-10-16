import React from "react";
import VisibleTodoList from "containers/VisibleTodoList";
import AddTodo from "components/AddTodo";
import Footer from "components/Footer";
import DemoView from "containers/DemoView";
import Hk from "components/hook"

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <DemoView/>
        <Hk></Hk>
      </div>
    );
  }
}
export default App;
