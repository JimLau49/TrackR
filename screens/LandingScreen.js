import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function LandingScreen(props) {
  const { setLandingPageOpen } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>TrackR</Text>

      <Image
        source={require("../assets/images/TrackRUpscaled.png")}
        style={{
          flex: 1,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute"
        }}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="BEGIN YOUR JOURNEY"
          style={styles.button}
          onPress={() => setLandingPageOpen()}
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%"
  },
  h1: {
    color: "black",
    fontSize: 70,
    zIndex: 2,
    marginTop: 70
  },

  buttonContainer: {
    backgroundColor: "#EC3535",
    opacity: 0.9,
    borderRadius: 5,
    padding: 8,
    width: 300,
    marginBottom: 150,
    zIndex: 2
  }
});
