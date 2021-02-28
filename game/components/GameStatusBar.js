import React, { Component } from "react";
import { View, Modal, Button, Text } from "react-native";
import Constants from "../Constants";
import Timer from "./Timer";

export default class GameStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
      inventorySize: 0,
    };  
  }

  componentDidUpdate() {
    if (this.props.resume != this.state.isOn){
      this.setState({isOn: true})
    }
  }

  render() {
    const width = Constants.MAX_WIDTH;
    const height = Constants.MAX_HEIGHT * 0.08;
    const x = 0;
    const y = 0;
    
    const handlePauseButton = () => {
      this.setState({isOn: !this.state.isOn})
      this.props.pauseUpdater(this.state.isOn)
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          position: "absolute",
          alignItems: "center",
          justifyContent: "flex-start",
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: "#111111",
        }}
      >
        <View style={{ marginLeft: "2%", marginRight: "5%" }}>
          <Button title="II" color="gray" onPress={handlePauseButton}></Button>
        </View>
        <Text style={{ color: "white", justifyContent: "center" }}>
          Inventory:   {this.state.inventorySize}/2
        </Text>
        <View style={{ marginLeft: "65%"}}>
          <Timer timerIsOn={this.state.isOn}/>
        </View>
      </View>
    );
  }
}
