/*
 * Level Select Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/levelSelect.png";

export default function LevelSelect({ navigation }) {

  //NAV CALLBACKS
  const launchLevelOne = () => {
    navigation.navigate("LevelOne");
  };
  const launchLevelTwo = () => {
    navigation.navigate("LevelTwo");
  };
  const launchLevelThree = () => {
    navigation.navigate("LevelThree")
  }
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.buttonContainer}>
      <MenuButton text="LIVING ROOM" onPress={launchLevelOne} txtColor={"white"}></MenuButton>
      <MenuButton text="KITCHEN" onPress={launchLevelTwo} txtColor={"white"}></MenuButton>
      <MenuButton text="BACKYARD" onPress={launchLevelThree} txtColor={"white"}></MenuButton>
      <MenuButton text="GO BACK" on onPress={goHome} txtColor={"white"}></MenuButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    top: 35,
    justifyContent: "center",
  }
});
