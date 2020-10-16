// import React from "react";
import { Provider } from "./context";
import History from "./history";
const url = require("url");

class HashRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      pathname: window.location.hash.slice(1) || "/",
      count: 0,
    };
  }
  componentDidMount() {
    window.location.hash= window.location.hash || "/"
    window.addEventListener("hashchange", () => {
      this.setState({
        pathname: window.location.hash.slice(1) || "/",
      });
    });
  }
  render() {
    let value = {
      type: "HashRouter",
      history: new History("HashRouter"),
      location: Object.assign(
        {
          pathname: "/",
        },
        url.parse(this.state.pathname, true)
      )
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export default HashRouter;
