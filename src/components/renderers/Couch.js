import React, { Component } from "react";
import { Image } from "react-native";

export default class Couch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 4;

    return (
      <Image
        style={{
          position: "absolute",
          left: x,
          top: y - 50,
          width: width,
          height: height,
          backgroundColor: this.props.backgroundColor,
          resizeMode: "contain",
        }}
        source={require("../../assets/living-room/couch.png")}
      />
    );
  }
}