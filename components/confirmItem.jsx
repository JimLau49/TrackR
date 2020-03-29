import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { SearchBar } from "react-native-elements";
import TabBarMaterial from "../icons/TabBarMaterial";

export default function confirmItem({ route }) {
  const { title } = route.params;
  return (
    <View>
      <Text>{title}</Text>
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
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 7,
    marginHorizontal: 16
  },
  itemContainer: {
    flexDirection: "row"
  },
  title: {
    fontSize: 30
  },
  addIcon: {
    alignItems: "flex-end",
    flex: 1
  },
  calorieInfo: {
    fontSize: 14,
    color: "grey"
  }
});
