import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function addMeal({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search Item");
          }}
        >
          <Image source={require("../assets/images/Breakfast.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search Item");
          }}
        >
          <Image source={require("../assets/images/Lunch.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search Item");
          }}
        >
          <Image source={require("../assets/images/Dinner.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search Item");
          }}
        >
          <Image source={require("../assets/images/Snack.png")} />
        </TouchableOpacity>
      </View>
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
