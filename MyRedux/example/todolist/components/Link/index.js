import React from "react";

class Link extends React.Component {
  if(active) {
    return <span>{this.props.children}</span>;
  }
  render() {
    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
