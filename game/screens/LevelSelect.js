// screens/BlogDetails.js

import React, { Component } from "react";
import { Button, View, Text, ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../HomeBackground1.jpg";

export default function LevelSelect({ navigation }) {

  const launchLevelOne = () => {
    navigation.navigate("LevelOne")
  }
  const launchLevelTwo = () => {
    navigation.navigate("LevelTwo")
  }
  
  return (
    <ImageBackground source={Background} style={styles.image} fadeDuration={0}>
      <MenuButton text="LIVING ROOM" onPress={launchLevelOne}></MenuButton>
      <MenuButton text="KITCHEN" onPress={launchLevelTwo}></MenuButton>
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
