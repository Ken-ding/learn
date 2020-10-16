// import React from "react";
import { Consumer } from "./context";

class Route extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(state) => {
            let { path, component: View } = this.props;
            if (path === state.location.pathname) {
              return <View {...state}></View>;
            }
            return null;
          }}
        </Consumer>
      </div>
    );
  }
}

export default Route;
