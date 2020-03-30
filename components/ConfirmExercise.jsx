import * as React from "react";
import {
  Image,
  Platform,
  Device,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  ScrollView,
  View,
  FlatList
} from "react-native";

export default function ConfirmExercise({ navigation }) {
  return <View style={styles.mainContainer}></View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center"
  },
  topBanner: {
    flex: 0.2,
    backgroundColor: "#EC3535",
    opacity: 0.8,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    alignSelf: "center"
  },
  addComponent: {
    flex: 0.4
  },
  numPad: {
    fontSize: 22,
    marginTop: "2%",
    marginStart: "9%",
    backgroundColor: "white",
    width: "20%",
    height: "15%",
    textAlign: "center"
  },
  quantity: {
    marginTop: "5%",
    marginLeft: "8%",
    fontSize: 35
  },
  addToJournal: {
    alignSelf: "center",
    marginTop: "5%"
  },
  addComponent: {
    flexDirection: "column"
  },
  touchable: {
    position: "relative"
  },
  foodIcon: {
    marginTop: "5%",
    marginLeft: "2%"
  },
  nutrientInformation: {
    flex: 0.75,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20
  },
  addToJournalSubmit: {
    opacity: 0.8,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: "#EC3535",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff"
  },
  addToJournalTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22
  },
  nutrientTitle: {
    fontSize: 30,
    marginTop: 15,
    alignSelf: "center"
  },
  nutrientInfo: {
    fontSize: 22
  }
});
