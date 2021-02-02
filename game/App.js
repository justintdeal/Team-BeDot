import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Physics from "./Physics";
import Entities from "./entities";
import Health from './components/Health'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true,
      health:3
    };

    this.gameEngine = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.running}
          systems={[Physics]}
          entities={Entities()}
        >
            {/* <Health/> */}
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232b2b",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
