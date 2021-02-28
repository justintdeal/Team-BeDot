// screens/BlogDetails.js

import React, { Component } from "react";
import { Button, View, Text, ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../HomeBackground1.jpg";

export default function About({ navigation }) {

  
  return (
    <ImageBackground source={Background} style={styles.image} fadeDuration={0}>
      <MenuButton text="About"></MenuButton>
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
