import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";
import Svg from "react-native-svg";

export default function HomeScreen() {
  const [calories, setCalories] = React.useState(1000);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.calorieCounter}>
          <Text style={styles.h1}>{calories}</Text>
          <Text style={styles.h3}>kCal</Text>
        </View>
        <Text style={styles.h2}>Net Calories</Text>
        <View style={styles.mainCircle}>
          <Image source={require("../assets/images/mainCircle.png")} />
        </View>
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

  topContainer: {
    flex: 0.6,

    backgroundColor: "#EC3535",
    opacity: 0.85,
    zIndex: 1
  },
  bottomContainer: {
    flex: 0.4
  },
  h1: {
    color: "white",
    fontSize: 55,
    marginTop: "20%",
    alignSelf: "center",
    zIndex: 3
  },
  h2: {
    color: "white",
    fontSize: 25,
    zIndex: 3,
    alignSelf: "center",
    bottom: "10%"
  },
  h3: {
    color: "white",
    fontSize: 30,
    zIndex: 3,
    alignSelf: "center"
  },
  mainCircle: {
    zIndex: 2,
    alignContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: "20%"
  },
  calorieCounter: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    zIndex: 3,
    marginTop: "15%"
  }
});
