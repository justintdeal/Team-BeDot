import React, { Component } from "react";
import { View, Modal, Button, Text } from "react-native";
import Constants from "../Constants";

export default class GameStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      msec: 0,
      isOn: this.props.timerIsOn,
    };
  }

  handleTimer = () => {
    if (this.props.timerIsOn) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.interval = setInterval(() => {
        if (this.state.msec !== 99) {
          this.setState({
            msec: this.state.msec + 1,
          });
        } else if (this.state.sec !== 59) {
          this.setState({
            msec: 0,
            sec: ++this.state.sec,
          });
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: ++this.state.min,
          });
        }
      }, 1);
    } else {
      clearInterval(this.interval);
    }
  };

  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate(props) {
    this.handleTimer();
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.setState({
      min: 0,
      sec: 0,
      msec: 0,
      isOn: false,
    });
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white" }}>{this.state.min}:</Text>
        <Text style={{ color: "white" }}>{this.state.sec}:</Text>
        <Text style={{ color: "white" }}>{this.state.msec}</Text>
      </View>
    );
  }
}
