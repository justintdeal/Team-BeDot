/*
 * Level Select Screen
 */

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/HomeBackground1.jpg";

export default function LevelSelect({ navigation }) {

  //NAV CALLBACKS
  const launchLevelOne = () => {
    navigation.navigate("LevelOne");
  };
  const launchLevelTwo = () => {
    navigation.navigate("LevelTwo");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <MenuButton text="LIVING ROOM" onPress={launchLevelOne}></MenuButton>
      <MenuButton text="KITCHEN" onPress={launchLevelTwo}></MenuButton>
      <MenuButton text="GO BACK" on onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
