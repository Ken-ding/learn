import React from 'react';
import { Consumer } from "./context";

class Link extends React.Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          let to = this.props.to || "/";
          to = to.indexOf("/") === 0 ? to : "/" + to;
          return (
            <a
              href={to}
              onClick={(e) => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                } else {
                  window.event.returnValue = false;
                }
                state.history.push(to);
              }}
            >
              {this.props.children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}

export default Link;
