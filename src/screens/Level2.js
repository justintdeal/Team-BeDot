import React, { Component } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Movement from "../systems/Movement";
import Entities from "../entities/Level2Entities";
import NoteButton from "../components/NoteButton";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/MenuButton";

export default class LevelTwo extends Component {
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
    };

    this.gameEngine = null;
  }
  pauseCheckCallback = (pauseStatus) => {
    this.setState({ engineRunning: pauseStatus });
  };

  handleNextLevel = () => {
    this.props.navigation.replace("LevelTwo");
  };
  handleLevelRestart = () => {
    this.props.navigation.replace("LevelTwo");
  };

  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  handleCollectNote = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
  };

  handleLevelComplete = () => {
    this.setState({ levelComplete: true });
  };
  getTime = (time) => {
    this.setState({ min: time.min });
    this.setState({ sec: time.sec });
    this.setState({ msec: time.msec });
  };
  onEvent = (e) => {
    if (e.type === "note-one-found" || e.type === "note-two-found") {
      this.setState({ collectNoteVisible: true });
    }
    if (e.type === "none") {
      this.setState({ collectNoteVisible: false });
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
            visible={this.state.levelComplete}
            onRequestClosed={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Time:</Text>
                <Text style={styles.modalText}>
                  {this.state.min}:{this.state.sec}:{this.state.msec}
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
          systems={[Movement]}
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
          currentLevel={"LevelTwo"}
        />
        <View style={{ alignItems: "flex-end" }}>
          <NoteButton
            style={styles.NoteButton}
            text={"Collect Note"}
            visible={this.state.collectNoteVisible}
            onPress={this.handleCollectNote}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A61919",
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
