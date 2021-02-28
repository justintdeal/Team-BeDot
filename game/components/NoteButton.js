import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";

export default function MenuButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} styles={styles.container}>
      <ImageBackground
        source={require("../note.png")}
        style={{ width: 100, height: 100 }}
      >
        {/* <View style={styles.button}> */}
          <Text style={styles.buttonText}>{text}</Text>
        {/* </View> */}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    borderRadius: 10,
    paddingVertical: "25%",
    paddingHorizontal: 0,
    backgroundColor: "red",
    alignItems: "center",
  },
  buttonText: {
    paddingTop: '35%',
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
