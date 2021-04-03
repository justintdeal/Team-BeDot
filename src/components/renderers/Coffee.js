import React, { Component } from "react";
import { Image } from "react-native";

export default class coffee extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = 30;
    const height = 30;
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: "#232b2b",
          resizeMode: "stretch",
        }}
        source={require("../../assets/coffee.png")}
      />
    );
  }
}
