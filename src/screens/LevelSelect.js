/*
 * Level Select Screen
 */

import React, {useEffect, useState} from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/homebkg.png";
import { get, insert } from "../Db";

export default function LevelSelect({ navigation }) {
  const [unlocked, setLvls] = useState({"lvl2": null, "lvl3": null})
  useEffect(() => {
    async function unlockedLevels() {
      const lvl2 = await get("lvl2");
      const lvl3 = await get("lvl3");

      setLvls({"lvl2": lvl2, "lvl3": lvl3})

    } 
    unlockedLevels();
  }, []);
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

  if (unlocked["lvl3"] != null) {
    return (
      <ImageBackground source={Background} style={styles.image}>
        <MenuButton text="LIVING ROOM" onPress={launchLevelOne} txtColor={"white"}></MenuButton>
        <MenuButton text="KITCHEN" onPress={launchLevelTwo} txtColor={"white"}></MenuButton>
        <MenuButton text="BACKYARD" onPress={launchLevelThree} txtColor={"white"}></MenuButton>
        <MenuButton text="GO BACK" on onPress={goHome} txtColor={"white"}></MenuButton>
      </ImageBackground>
    );
  } else if (unlocked["lvl2"] != null) {
    return (
      <ImageBackground source={Background} style={styles.image}>
        <MenuButton text="LIVING ROOM" onPress={launchLevelOne} txtColor={"white"}></MenuButton>
        <MenuButton text="KITCHEN" onPress={launchLevelTwo} txtColor={"white"}></MenuButton>
        <MenuButton text="GO BACK" on onPress={goHome} txtColor={"white"}></MenuButton>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground source={Background} style={styles.image}>
        <MenuButton text="LIVING ROOM" onPress={launchLevelOne} txtColor={"white"}></MenuButton>
        <MenuButton text="GO BACK" on onPress={goHome} txtColor={"white"}></MenuButton>
      </ImageBackground>
    );
  }

}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
