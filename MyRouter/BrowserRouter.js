// import React from "react";
import { Provider} from "./context";
import History from "./history";
const url = require("url");

class BrowserRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      pathname: window.location.pathname || "/",
    };
  }
  componentDidMount() {
    window.addEventListener("pushState", () => {
      console.log("pushState");
      this.setPathname();
    });
  }
  setPathname = () => {
    this.setState(
      {
        pathname: window.location.pathname || "/",
      },(v) => {
        console.log(this.state);
      }
    );
  };
  render() {
    let value = {
      type: "BrowserRouter",
      history: new History("BrowserRouter"),
      location: Object.assign(
        {
          pathname: "/",
        },
        url.parse(this.state.pathname, true)
      )
    };
    return (
      <Provider value={value}>
       {this.props.children}
      </Provider>
    );
  }
}

export default BrowserRouter;
