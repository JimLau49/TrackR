import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>AlligatorChef</Text>
      <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="LET'S START"
          style={styles.button}
          onPress={() => this.onPress()}
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
    color: "#008F68",
    fontSize: 40
  },
  h2: {
    color: "#FAE042",
    fontSize: 18,
    marginTop: 8
  },

  buttonContainer: {
    backgroundColor: "#008F68",
    borderRadius: 5,
    padding: 8,
    margin: 8
  }
});
