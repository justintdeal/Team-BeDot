import React, { Component } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Movement from "../systems/Movement";
import Entities from "../entities/Level3Entities";
import Dispatches from "../systems/Level3Dispatches";
import NoteButton from "../components/NoteButton";
import GameStatusBar from "../components/GameStatusBar";
import SpeakButton from "../components/SpeakButton";
import MenuButton from "../components/MenuButton";
import DogMove from "../systems/DogMove";
import { insert, get } from "../Db";
export default class LevelThree extends Component {
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
      heartBadgeModal: false,
    };

    this.gameEngine = null;
  }
  pauseCheckCallback = (pauseStatus) => {
    this.setState({ engineRunning: pauseStatus });
  };

  handleNextLevel = () => {
    this.props.navigation.replace("LevelThree");
  };
  handleLevelRestart = () => {
    this.props.navigation.replace("LevelThree");
  };

  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  handleCollectNote = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
  };
  async componentDidMount() {
    this.state.badgeEarned = await get("heart");
    let gold = await get("gold3");
    let silver = await get("silver3");
    let bronze = await get("bronze3");

    if (gold === "true") {
      this.state.highestEarned = "gold";
    } else if (silver === "true") {
      this.state.highestEarned = "silver";
    } else if (bronze === "true") {
      this.state.highestEarned == "bronze";
    } else {
      this.state.highestEarned == null;
    }
  }
  handleLevelComplete = () => {
    this.setState({ levelComplete: true });
    if (
      this.state.sec < 15 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold"
    ) {
      insert("gold3", "true");
      insert("silver3", "false");
      insert("bronze3", "false");
      this.setState({ highestEarned: "gold" });
    } else if (
      this.state.sec < 30 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold" &&
      this.state.highestEarned !== "silver"
    ) {
      insert("silver3", "true");
      insert("bronze3", "false");
      this.setState({ highestEarned: "silver" });
    } else {
      insert("bronze3", "true");
      this.setState({ highestEarned: "bronze" });
    }
  };
  getTime = (time) => {
    this.setState({ min: time.min });
    this.setState({ sec: time.sec });
    this.setState({ msec: time.msec });
  };
  handleNPCInteraction = () => {
    this.setState({ interactionModalVisible: true });
  };

  onEvent = (e) => {
    if (e.type === "pet" && this.state.badgeEarned == null) {
      this.setState({ heartBadgeModal: true });
    }
    if (e.type === "note-one-found" || e.type === "note-two-found") {
      this.setState({ collectNoteVisible: true });
    }
    if (e.type === "npc-interact") {
      this.setState({ interactionIconVisible: true });
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
            visible={this.state.interactionModalVisible}
            supportedOrientations={["landscape"]}
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
            supportedOrientations={["landscape"]}
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
          systems={[Movement, Dispatches, DogMove]}
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
          currentLevel={"LevelThree"}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.heartBadgeModal}
          supportedOrientations={["landscape"]}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You Pet The Dog!</Text>
              <MenuButton
                text="OK"
                onPress={() => {
                  this.setState({ heartBadgeModal: false });
                  insert("heart", "true");
                }}
              ></MenuButton>
            </View>
          </View>
        </Modal>
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
    backgroundColor: "#DBD7D2",
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
