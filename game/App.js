// App.js

import React, { Component } from "react";
import Navigator from "./Navigator";
import { Button, View, Text, ImageBackground, StyleSheet, StatusBar} from "react-native";
import { Audio } from 'expo-av';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.playMusic = this.playMusic.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
  //   this.playMusic();
  StatusBar.setHidden(true)
  }

  // playMusic = async () => {
  //   this.audioPlayer = new Audio.Sound()
  //   await this.audioPlayer.loadAsync({uri: "./IntroSong.mp3"})
  //   this.audioPlayer.playAsync()
  // }

  render() {
    return (
      <Navigator/>
    )
  }
}

