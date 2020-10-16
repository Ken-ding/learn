import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <div>
        上线状态：{String(this.props.demo.online)} 个人信息：
        {this.props.demo.info}{" "}
        <button
          onClick={() => {
            this.props.setInfo();
          }}
        >
          修改
        </button>
      </div>
    );
  }
}

export default Demo;
