import React from "react";
import { Button, View, Text, ImageBackground, StyleSheet } from "react-native";
import MenuButton from '../components/MenuButton';
import Background from "../HomeBackground1.jpg";

export default function Home({ navigation }) {
  const handlePlayNow = () => {
    navigation.navigate("LevelOne");
  };


  const handleLevelSelect = () => {
    navigation.navigate("LevelSelect")
  }
  const handleBadgeNav= () => {
    navigation.navigate("Badges")
  }
  const handleAboutNav = () => {
    navigation.navigate("About")
  }
  const handleSettingNav = () => {
    navigation.navigate("Settings")
  }

  return (
    <ImageBackground source={Background} style={styles.image} fadeDuration={0}>
      <View style={styles.buttonContainer}>
        <MenuButton text="PLAY NOW" onPress={handlePlayNow}></MenuButton> 
        <MenuButton text="LEVEL SELECT" onPress={handleLevelSelect}></MenuButton> 
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
      flex:1, 
      justifyContent: "center"
  }, 
  button: {
      color: "black"
  }
});