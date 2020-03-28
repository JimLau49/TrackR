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
import Autocomplete from "react-native-autocomplete-input";
export default function searchItem({ navigation }) {
  const DATA = [
    {
      id: "1",
      title: "First Item"
    },
    {
      id: "2",
      title: "Second Item"
    },
    {
      id: "3",
      title: "Third Item"
    }
  ];

  const [userInput, setUserInput] = React.useState(null);
  const [selected, setSelected] = React.useState(new Map());
  const [autocomplete, setAutocomplete] = React.useState([...DATA]);

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected]
  );

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

  const Item = ({ id, title, selected, onSelect }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" }
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        placeholder="Type Here..."
        value={userInput}
        onClear={clearSearch}
        onChangeText={userInput => updateSearchValues(userInput, DATA)}
      />
      {userInput !== "" && userInput !== null ? (
        <FlatList
          data={autocomplete}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
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
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});
