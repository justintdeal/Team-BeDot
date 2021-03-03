/*
 * Level One Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 * is ugly rn because I need to modularize the modals
 */

import React, { Component } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Entities from "../entities/Level1Entites";
import Dispatches from "../systems/Level1Dispatches";
import NoteButton from "../components/NoteButton";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/MenuButton";
import SpeakButton from "../components/SpeakButton";
import Movement from "../systems/Movement";

export default class LevelOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      engineRunning: true,
      modalVisible: false,
      levelComplete: false,
      collectNoteVisible: false,
      inventorySize: 0,
      inventoryCap: 2,
      min: "00",
      sec: "00",
      msec: "00",
      interactionIconVisible: false,
      interactionModalVisible: false,
    };

    this.gameEngine = null;
  }

  // This is a callback function that is passed as a
  // prop to pause. When the pause button in the status bar
  // is clicked the status bar calls this function which changes
  // the pause state
  pauseCheckCallback = (pauseStatus) => {
    this.setState({ engineRunning: pauseStatus });
  };

  //callback to take the user to the next level
  handleNextLevel = () => {
    this.props.navigation.replace("LevelTwo");
  };

  //callback to restart the level
  handleLevelRestart = () => {
    this.props.navigation.replace("LevelOne");
  };

  // go home callback
  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  // callback that is called when the user hits the Note Button
  // updates the inventory by one
  handleCollectNote = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
  };

  //callback that changes the level status to complete
  // called after contacting the stairs with a full inventory
  handleLevelComplete = () => {
    this.setState({ levelComplete: true });
  };

  //confusing process to get time from the timer component
  // callback is passed to statusbar which passes it to timer.
  // Time calls the function when level complete changes and updates
  // the final level time
  getTime = (time) => {
    this.setState({ min: time.min });
    this.setState({ sec: time.sec });
    this.setState({ msec: time.msec });
  };

  // function called by the speak button
  // makes the npc dialog modal visible
  handleNPCInteraction = () => {
    this.setState({ interactionModalVisible: true });
  };

  //Handles all of the collisions and information that comes from
  //the system dispatches. (Level1Dispatches.js)
  onEvent = (e) => {
    if (e.type === "note-one-found" || e.type === "note-two-found") {
      this.setState({ collectNoteVisible: true });
    }
    if (e.type === "npc-interact") {
      this.setState({ interactionIconVisible: true });
    }
    if (e.type === "none") {
      this.setState({ collectNoteVisible: false });
      this.setState({ interactionIconVisible: false });
    }
    if (
      e.type === "at-objective" &&
      this.state.inventoryCap == this.state.inventorySize &&
      this.state.levelComplete != true
    ) {
      this.handleLevelComplete();
    }
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.interactionModalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  COLLECT ALL THE NOTES TO PROGRESS TO THE NEXT LEVEL
                </Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ interactionModalVisible: false });
                  }}
                ></MenuButton>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.levelComplete}
            onRequestClosed={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Time: {this.state.min}:{this.state.sec}:{this.state.msec}
                </Text>
                <MenuButton
                  text="CONTINUE"
                  onPress={this.handleNextLevel}
                ></MenuButton>
                <MenuButton
                  text="PLAY AGAIN"
                  onPress={this.handleLevelRestart}
                ></MenuButton>
                <MenuButton
                  text="QUIT"
                  onPress={this.handleReturnToHome}
                ></MenuButton>
              </View>
            </View>
          </Modal>
        </View>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.engineRunning}
          systems={[Movement, Dispatches]}
          onEvent={this.onEvent}
          entities={Entities()}
        ></GameEngine>
        <GameStatusBar
          pauseUpdater={this.pauseCheckCallback}
          inventorySize={this.state.inventorySize}
          inventoryCap={this.state.inventoryCap}
          navigation={this.props.navigation}
          levelComplete={this.state.levelComplete}
          timeToLevel={this.getTime}
          currentLevel={"LevelOne"}
        />
        <View style={{ alignItems: "flex-end" }}>
          <NoteButton
            style={styles.NoteButton}
            text={"Collect Note"}
            visible={this.state.collectNoteVisible}
            onPress={this.handleCollectNote}
          />

          <SpeakButton
            style={styles.NoteButton}
            text={"Speak"}
            visible={this.state.interactionIconVisible}
            onPress={this.handleNPCInteraction}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88ccff",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  NoteButton: {},
});
