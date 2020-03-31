import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { UserContext } from "../context/userData.context";
import { Button } from "react-native-elements";
import TabBarAntDesign from "../icons/TabBarAntDesign";

export default function HomeScreen({ navigation }) {
  
  const {currentUserData} = React.useContext(UserContext);
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.calendar}>  
          <TabBarAntDesign name="left" size={20} />
          <Text style={{fontSize: 16}}>{"  "}Today, 14 Mar{"  "}</Text>
          <TabBarAntDesign name="right" size={20} />
        </View>

        <View style={styles.calorieCounter}>
          <Text style={styles.h1}>{currentUserData[0].calories}</Text>
          <Text style={styles.h3}>kCal</Text>
        </View>
        <Text style={styles.h2}>Net Calories</Text>
        <View style={styles.mainCircle}>
          <Image source={require("../assets/images/mainCircle.png")} />
        </View>
        <View style={{flexDirection: "row", top: 25, marginLeft: 25}}>
          
            <Text style={{ color: "white", fontSize: 20, flex: 5}}>
            Current{"\n"}Weight:{"\n"}130lbs
            </Text>
          
          
            <Text style={{ color: "white", fontSize: 20, textAlign:"center", flex: 2}}>
            Goal{"\n"}Weight:{"\n"}155lbs
            </Text>
          
          
        </View>
      </View>

      <View style={styles.mealContainer}>
        <View style={styles.addMeal}>
          <TouchableOpacity
            style={{
              width: "90%",
              height: "50%",
              marginTop: "2%",
              flexDirection: "row"
            }}
            activeOpacity={0.5}
          >
            <Button
              onPress={() => {
                navigation.navigate("Search Item");
              }}
              title="Add a Meal"
              titleStyle={{ color: "black", fontWeight: "500", fontSize: 35 }}
              buttonStyle={{
                opacity: 0.8,
                backgroundColor: "#FFFFFF",
                height: 75,
                borderWidth: 2,
                flex: 1,
                borderColor: "#FFFFFF"
              }}
              containerStyle={{ flex: 1 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.exerciseContainer}>
        <View style={styles.addExercise}>
          <TouchableOpacity
            style={{
              width: "90%",
              height: "50%",
              marginTop: "2%",
              flexDirection: "row"
            }}
            activeOpacity={0.5}
          >
            <Button
              onPress={() => {
                navigation.navigate("Add Exercise");
              }}
              title="Add Exercise"
              titleStyle={{ color: "black", fontWeight: "500", fontSize: 35 }}
              buttonStyle={{
                opacity: 0.8,
                backgroundColor: "#FFFFFF",
                height: 75,
                borderWidth: 2,
                flex: 1,
                borderColor: "#FFFFFF"
              }}
              containerStyle={{ flex: 1 }}
            />
          </TouchableOpacity>
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

  mealContainer: {
    flex: 0.2,
    marginTop: "2%"
  },

  exerciseContainer: {
    flex: 0.2
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
    marginTop: "3%"
  },
  addMeal: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop: "2%",
    flex: 1
  },
  addExercise: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop: "2%"
  },
  calendar:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%"
  }
});
