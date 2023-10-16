import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  state = {
    hour: this.props.hour || 0,
    minute: this.props.minute || 0,
    second: this.props.second || 0,
  };

  getNormalTime = (n) => {
    return n < 10 ? "0" + n : n;
  };

  interval = setInterval(() => {
    this.setState((state) => {
      return {
        second: state.second - 1,
        minute: state.minute - 1,
        hour: state.hour - 1,
      };
    });
  }, 1000);

  render() {
    return (
      <div className="header">
        {this.getNormalTime(this.state.hour)}:{""}
        {this.getNormalTime(this.state.minute)}:{""}
        {this.getNormalTime(this.state.second)}
      </div>
    );
  }
}

export default Header;
