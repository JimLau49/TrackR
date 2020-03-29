import * as React from "react";
import {
  Image,
  Platform,
  Device,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
  TextInput,
  View,
  FlatList
} from "react-native";
import TabBarMaterial from "../icons/TabBarMaterial";
import { foodData } from "../constants/food-information.data";
export default function confirmItem({ route, navigation }) {
  const { title } = route.params;
  const [nutrients, setNutrients] = React.useState([...foodData]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBanner}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.addIcon}>
          <TabBarMaterial name="restaurant-menu" color="black" />
        </View>
      </View>
      <View style={styles.addComponent}>
        <Text style={styles.quantity}>Quantity</Text>
        <TextInput style={styles.numPad} keyboardType="number-pad" />
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search Item");
            }}
          >
            <Image source={require("../assets/images/addButton.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nutrientInformation}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 0,
    alignContent: "center"
  },

  topBanner: {
    flex: 0.1,
    backgroundColor: "#EC3535",
    opacity: 0.8,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center"
  },

  button: {
    marginTop: "5%",
    alignContent: "center",
    alignSelf: "center"
  },
  title: {
    fontSize: 30,
    alignSelf: "center"
  },
  numPad: {
    fontSize: 22,
    marginTop: "12.5%",
    marginStart: "5%",
    backgroundColor: "white",
    width: "20%",
    height: "2%",
    textAlign: "center"
  },
  addComponent: {
    flexDirection: "column"
  },
  quantity: {
    zIndex: 3,
    fontSize: 35,
    marginStart: "4%",
    marginTop: "5%"
  },
  touchable: {
    flex: 1,
    position: "relative"
  },
  addIcon: {
    alignItems: "flex-end",
    marginLeft: "4%",
    zIndex: 2
  },
  nutrientInformation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});
