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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>0</Text>
        <Text style={styles.h2}>calories consumed</Text>
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
    fontSize: 70,
    marginTop: 70,
    alignSelf: "center",
    zIndex: 3
  },
  h2: {
    color: "white",
    fontSize: 20,
    zIndex: 3,
    position: "absolute",
    alignSelf: "center",
    marginTop: 150
  },
  mainCircle: {
    zIndex: 2,
    alignContent: "center",
    alignSelf: "center",
    bottom: 120
  }
});
