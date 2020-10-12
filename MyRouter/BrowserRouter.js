import React from "react";
import { Provider} from "./context";
import History from "./history";
const url = require("url");

class BrowserRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      pathname: window.location.pathname || "/",
      count: 0
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
        count: ++this.state.count,
      },(v) => {
        console.log(this.state);
      }
    );
  };
  render() {
    let value = {
      type: "BrowserRouter",
      history: History,
      location: Object.assign(
        {
          pathname: "/",
        },
        url.parse(this.state.pathname, true)
      ),
      count: this.state.count,
      cb:this.setPathname,
    };
    return (
      <Provider value={value}>
       {this.props.children}
      </Provider>
    );
  }
}

export default BrowserRouter;
