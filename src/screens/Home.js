/*
 * Home Screen
 */

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import {get} from "../Db"
import Background from "../assets/orangeHomescreen.png";

export default function Home({ navigation }) {
  const [unlocked, setLvls] = useState({ lvl2: null, lvl3: null });
  useEffect(() => {
    async function unlockedLevels() {
      const lvl2 = await get("lvl2");
      const lvl3 = await get("lvl3");

      setLvls({ lvl2: lvl2, lvl3: lvl3 });
    }
    unlockedLevels();
  }, []);
  //Nav Callbacks
  const handlePlayNow = () => {
    if (unlocked["lvl3"] != null) {
      navigation.navigate("LevelThree");
    } else if (unlocked["lvl2"] != null) {
      navigation.navigate("LevelTwo");
    } else {
      navigation.navigate("LevelOne")
    }
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
        <MenuButton
          text="PLAY NOW"
          onPress={handlePlayNow}
          txtColor={"white"}
        ></MenuButton>
        <MenuButton
          text="LEVEL SELECT"
          onPress={handleLevelSelect}
          txtColor={"white"}
        ></MenuButton>
        <MenuButton
          text="BADGES"
          onPress={handleBadgeNav}
          txtColor={"white"}
        ></MenuButton>
        <MenuButton
          text="ABOUT"
          onPress={handleAboutNav}
          txtColor={"white"}
        ></MenuButton>
        <MenuButton
          text="SETTINGS"
          onPress={handleSettingNav}
          txtColor={"white"}
        ></MenuButton>
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
