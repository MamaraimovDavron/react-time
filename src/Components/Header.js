import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  state = {
    hour: this.props.hour,
    minute: this.props.minute,
    second: this.props.second,
  };

  getNormalTime = (n) => {
    return n < 10 ? "0" + n : n;
  };

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
