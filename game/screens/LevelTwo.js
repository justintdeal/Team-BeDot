import React, { Component } from "react";
import { StatusBar, StyleSheet, View, Modal, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Physics from "../Physics";
import Entities from "../LevelTwoEntities";
import Health from '../components/Health'
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/MenuButton"


export default class LevelTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      engineRunning: true,
      modalVisible: false,
      paused: false,
    };

    this.gameEngine = null;
  }
  pauseCheckCallback = (pauseStatus) => {
    this.setState({ paused: pauseStatus });
    this.setState({ modalVisible: !this.state.modalVisible });
    this.setState({ engineRunning: !this.state.engineRunning });
  };

  handleResume = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
    this.setState({ engineRunning: !this.state.engineRunning });
    this.setState({paused: false})
  }

  handleLevelRestart = () => {
    this.props.navigation.replace("LevelTwo");
  };


  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>PAUSED</Text>
                {/* <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                </Pressable> */}
                <Text style={styles.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="RESUME"
                  onPress={this.handleResume}
                ></MenuButton>
                <MenuButton
                  text="RESTART"
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
          systems={[Physics]}
          entities={Entities()}
        ></GameEngine>
        <GameStatusBar pauseUpdater={this.pauseCheckCallback} resume={!this.state.paused}/>
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
});
