/*
 * Badge Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/HomeBackground1.jpg";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <MenuButton text="About"></MenuButton>
      <Text style={styles.modalText}> Welcome to Child Safe!</Text>
      <Text style={styles.modalText}> Team: Sora Bang, Justin Deal, Jayla Demaine, Elina Ebby, Sam Thomas, David Okao</Text>
      <Text style={styles.modalText}> Team Client: Ann McClellan</Text>
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
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
