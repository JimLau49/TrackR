import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from "react-native";
import { SearchBar } from "react-native-elements";
import TabBarMaterial from "../icons/TabBarMaterial";
import TabBarAntDesgin from "../icons/TabBarAntDesign";
import { foodData } from "../constants/food-information.data";
import { foodSuggestions } from "../constants/food-suggestions.data";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function searchItem({ navigation }) {
  const [userInput, setUserInput] = React.useState("");
  const [autocomplete, setAutocomplete] = React.useState([...foodData]);
  const [suggestions, setSuggestions] = React.useState([...foodSuggestions]);

  const updateSearchValues = (text, matchingFoods) => {
    let sanitizedText = text.toLowerCase();
    const queryResult = matchingFoods.filter(
      food => food.title.toLowerCase().includes(sanitizedText) !== false
    );
    setAutocomplete([...queryResult]);
    setUserInput(text);
  };

  const clearSearch = () => {
    setUserInput("");
  };

  const ScanButton = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          testID="locationButton"
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <TabBarAntDesgin name="barcode" size={32} />
        </TouchableOpacity>
      </View>
    );
  };

  const Item = ({ id, title, calorieInfo, addedToJournal }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          clearSearch();
          userInput !== ""
            ? addedToJournal == false
              ? navigation.navigate("Confirm Item", { title: title })
              : navigation.navigate("Update Item", { title: title })
            : navigation.navigate("Recipe", { title: title });
        }}
      >
        <View style={styles.item}>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
            {userInput !== "" ? (
              addedToJournal == false ? (
                <View style={styles.addIcon}>
                  <TabBarMaterial name="add-circle" color="black" />
                </View>
              ) : (
                <View style={styles.addIcon}>
                  <TabBarAntDesign name="checkcircle" color="black" />;
                </View>
              )
            ) : (
              <View style={styles.addIcon}>
                <TabBarMaterial name="book" color="black" />
              </View>
            )}
          </View>
          <Text style={styles.calorieInfo}>{calorieInfo}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        placeholder="Type Here..."
        value={userInput}
        onClear={clearSearch}
        onChangeText={userInput => updateSearchValues(userInput, foodData)}
      />
      {userInput !== "" ? (
        <FlatList
          data={autocomplete}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              calorieInfo={item.calorieInfo}
              addedToJournal={item.added}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <>
          <Text style={styles.suggestions}>Your Suggestions</Text>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                title={item.title}
                calorieInfo={item.calorieInfo}
                addedToJournal={item.added}
              />
            )}
            keyExtractor={item => item.id}
          />
        </>
      )}
      <ScanButton />
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
  },
  suggestions: {
    fontSize: 22,
    alignSelf: "center",
    marginTop: "5%"
  },
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
