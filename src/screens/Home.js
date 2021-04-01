/*
 * Home Screen
 */

import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/HomeBackground1.jpg";
import {save, getValueFor} from "../DB";

export default function Home({ navigation }) {
  //Nav Callbacks
  const handlePlayNow = () => {
    navigation.navigate("LevelOne");
  };
  const handleLevelSelect = () => {
    save("test", "true")
    navigation.navigate("LevelSelect");
  };
  async function handleBadgeNav () {

    console.log(await getValueFor("test"))
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
        <MenuButton text="PLAY NOW" onPress={handlePlayNow}></MenuButton>
        <MenuButton
          text="LEVEL SELECT"
          onPress={handleLevelSelect}
        ></MenuButton>
        <MenuButton text="BADGES" onPress={handleBadgeNav}></MenuButton>
        <MenuButton text="ABOUT" onPress={handleAboutNav}></MenuButton>
        <MenuButton text="SETTINGS" onPress={handleSettingNav}></MenuButton>
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
    justifyContent: "center",
  },
  button: {
    color: "black",
  },
});
