import React, { useState, PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { GameLoop } from "react-native-game-engine";
import Walls from './components/Walls'
 
const RADIUS = 25;

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height  // width and height of any screen
//const birdLeft = screenWidth / 2   // very left corner of bird
//const [birdBottom, setBirdBottom] = useState(screenHeight / 2) // [] is called a state and the useState allows for thing to be on middle of screen at all times
const [wallsLeft, setWallsLeft] = useState(screenWidth)
const [wallsLeftTwo, setWallsLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
//const gravity = 3
const [wallsNegHeight, setWallsNegHeight]  = useState(0)
const [wallsNegHeightTwo, setWallsNegHeightTwo]  = useState(0)
const [score, setScore] = useState(0)
const wallWidth = 60
const wallHeight = 300
const gap = 200
// let gameTimerID
// let wallsLeftTimerId
// let wallsLeftTimerIdTwo
// const [isGameOver, setIsGameOver] = useState(false)
 
export default class BestGameEver extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: screenWidth / 2 - RADIUS,
      y: screenHeight / 2 - RADIUS
    };
  }
 
  updateHandler = ({ touches, screen, layout, time }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };
 
  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>
 
        <View style={[styles.player, { left: this.state.x, top: this.state.y }]}>

        <Walls 
        color = {'yellow'}
        wallHeight = {wallHeight}
        wallWidth = {wallWidth}
        randomBottom = {wallsNegHeightTwo}
        gap = {gap}
        wallsLeft = {wallsLeftTwo}
      />
      <Walls 
        color = {'yellow'}
        wallHeight = {wallHeight}
        wallWidth = {wallWidth}
        randomBottom = {wallsNegHeightTwo}
        gap = {gap}
        wallsLeft = {wallsLeftTwo}
      />
        
        
      </View>
 
      </GameLoop>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "pink",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});
 
AppRegistry.registerComponent("BestGameEver", () => BestGameEver);