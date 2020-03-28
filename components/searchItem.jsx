import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function searchItem({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 0,
    alignContent: "center"
  },

  button: {
    flex: 0.25,
    alignContent: "center",
    alignSelf: "center"
  }
});
