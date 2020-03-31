import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TabBarAntDesgin from "../icons/TabBarAntDesign";

const ScanButton = ({ onScanButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="locationButton"
        style={styles.button}
        onPress={onScanButtonPress}
      >
        <TabBarAntDesgin name="barcode" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 10
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50
  }
});

export default ScanButton;
