/*
 * Application Settings Screen
 */

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/settingsScreen.png";

export default function Settings({ navigation }) {
  // NAV CALLBACKS
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <MenuButton text="Settings"></MenuButton>
      <MenuButton text="GO BACK" txtColor={"white"} onPress={goHome}></MenuButton>
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
