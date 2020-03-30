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
import { exerciseInfo } from "../constants/excercise-information.data";
export default function searchItem({ navigation }) {
  const [userInput, setUserInput] = React.useState("");
  const [autocomplete, setAutocomplete] = React.useState([...exerciseInfo]);

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

  const Item = ({ id, title, calorieInfo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Confirm Exercise", { title: title });
        }}
      >
        <View style={styles.item}>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.addIcon}>
              <TabBarMaterial name="add-circle" color="black" />
            </View>
          </View>
          <Text style={styles.calorieInfo}>{calorieInfo}kCal</Text>
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
        onChangeText={userInput => updateSearchValues(userInput, exerciseInfo)}
      />
      {userInput !== "" ? (
        <FlatList
          data={autocomplete}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              calorieInfo={item.calorieInfo}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : null}
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
    fontSize: 22
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
