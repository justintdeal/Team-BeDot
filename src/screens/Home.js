/*
 * Home Screen
 */

import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/orangeHomescreen.png";

export default function Home({ navigation }) {
  //Nav Callbacks
  const handlePlayNow = () => {
    navigation.navigate("LevelOne");
  };
  const handleLevelSelect = () => {
    navigation.navigate("LevelSelect");
  };
  const handleBadgeNav = () => {
    navigation.navigate("Badges");
  };
  const handleAboutNav = () => {
    navigation.navigate("About");
  };
  const handleSettingNav = () => {
    navigation.navigate("Settings");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.buttonContainer}>
        <MenuButton text="PLAY NOW" onPress={handlePlayNow} txtColor={"white"}></MenuButton>
        <MenuButton
          text="LEVEL SELECT"
          onPress={handleLevelSelect}
          txtColor={"white"}
        ></MenuButton>
        <MenuButton text="BADGES" onPress={handleBadgeNav} txtColor={"white"}></MenuButton>
        <MenuButton text="ABOUT" onPress={handleAboutNav} txtColor={"white"}></MenuButton>
        <MenuButton text="SETTINGS" onPress={handleSettingNav} txtColor={"white"}></MenuButton>
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
    top: 55,
    justifyContent: "center",
  },
  button: {
    color: "black",
  },
});
