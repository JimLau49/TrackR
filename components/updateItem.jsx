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
import TabBarMaterial from "../icons/TabBarMaterial";
import { foodData } from "../constants/food-information.data";
import { Divider } from "react-native-elements";
import { UserContext } from "../context/userData.context";
import { Button } from "react-native-elements";

export default function updateItem({ route, navigation }) {
  const { title, id } = route.params;
  const [nutrients, setNutrients] = React.useState([...foodData]);
  const [quantity, setQuantity] = React.useState(1);
  const { currentUserData } = React.useContext(UserContext);

  const NutrientItem = ({ protein, calories, fat, cholesterol, sodium }) => {
    return (
      <View>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>
          {" "}
          Calories:{" "}
          {quantity === 0 || isNaN(quantity) ? calories : calories * quantity}
          kCal
        </Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>
          {" "}
          Protein:{" "}
          {quantity === 0 || isNaN(quantity) ? protein : protein * quantity}g
        </Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>
          {" "}
          Fat: {quantity === 0 || isNaN(quantity) ? fat : fat * quantity}g
        </Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>
          {" "}
          Cholesterol:{" "}
          {quantity === 0 || isNaN(quantity)
            ? cholesterol
            : cholesterol * quantity}
          mg
        </Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>
          {" "}
          Sodium:{" "}
          {quantity === 0 || isNaN(quantity) ? sodium : sodium * quantity}mg
        </Text>
        <Divider style={{ backgroundColor: "grey" }} />
      </View>
    );
  };

  const filteredData = () => {
    const queryResult = nutrients.filter(food => food.title === title);

    setNutrients([...queryResult]);
  };

  const updateUserReport = () => {
    let userValues = [...currentUserData];
    let updatedValues = { ...userValues[0] };
    let nutrientValues = { ...nutrients[0] };

    updatedValues.protein += nutrientValues.protein * quantity;
    updatedValues.calories += nutrientValues.calories * quantity;
    updatedValues.fat += nutrientValues.fat * quantity;
    updatedValues.cholesterol += nutrientValues.cholesterol * quantity;
    updatedValues.sodium += nutrientValues.sodium * quantity;

    currentUserData[0] = updatedValues;
  };

  React.useEffect(() => {
    filteredData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBanner}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.foodIcon}>
          <TabBarMaterial name="restaurant-menu" color="black" />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.addComponent}>
          <Text style={styles.quantity}>Quantity</Text>
          <TextInput
            style={styles.numPad}
            keyboardType="number-pad"
            onChangeText={quantity => setQuantity(parseInt(quantity))}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={{ marginLeft: 36, width: 150 }}
              activeOpacity={0.5}
            >
              <Button
                onPress={() => {
                  updateUserReport();
                  navigation.navigate("Search Item");
                }}
                color="black"
                title="Update"
                buttonStyle={{
                  opacity: 0.8,
                  backgroundColor: "#EC3535",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#EC3535"
                }}
                containerStyle={{ flex: 1 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 180 }} activeOpacity={0.5}>
              <Button
                onPress={() => {
                  updateUserReport();
                  navigation.navigate("Search Item");
                }}
                title="Delete"
                buttonStyle={{
                  opacity: 0.8,
                  backgroundColor: "#EC3535",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#EC3535"
                }}
                containerStyle={{ flex: 1, marginLeft: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.nutrientInformation}>
          <Text style={styles.nutrientTitle}>Nutrients</Text>
          <FlatList
            data={nutrients}
            renderItem={({ item }) => (
              <NutrientItem
                calories={item.calories}
                protein={item.protein}
                fat={item.fat}
                cholesterol={item.cholesterol}
                sodium={item.sodium}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
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
    height: "20%",
    textAlign: "center"
  },
  quantity: {
    marginTop: "5%",
    marginLeft: "8%",
    fontSize: 35
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
  nutrientTitle: {
    fontSize: 30,
    marginTop: 15,
    alignSelf: "center"
  },
  nutrientInfo: {
    fontSize: 22
  },
  buttons: {
    flexDirection: "row",
    flex: 1,
    top: 20
  },
  deleteToJournalTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22
  }
});
