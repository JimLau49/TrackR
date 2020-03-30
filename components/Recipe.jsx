import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Divider } from "react-native-elements";
import { UserContext } from "../context/userData.context";

export default function Recipe() {
  const userData = React.useContext(UserContext);

  const NutrientItem = ({ protein, calories, fat, cholesterol, sodium }) => {
    return (
      <View>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}> Calories: {calories}kCal</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}> Protein: {protein}g</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}> Fat: {fat}g</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}> Cholesterol: {cholesterol}mg</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}> Sodium: {sodium}mg</Text>
        <Divider style={{ backgroundColor: "grey" }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nutrientTitle}>Pasta Carbonara</Text>
      <View style={styles.ingredients}>
        <Text style={styles.nutrientTitle}>Ingredients</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Pasta</Text>
          <Text style={styles.endRow}>x2</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Bacon</Text>
          <Text style={styles.endRow}>x4</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Egg Yolk</Text>
          <Text style={styles.endRow}>x2</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Parmesan</Text>
          <Text style={styles.endRow}>x1</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Parsley</Text>
          <Text style={styles.endRow}>x3</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.row}>
          <Text style={styles.ingredientInfo}>Milk</Text>
          <Text style={styles.endRow}>x2</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
      </View>

      <View style={styles.nutrientInformation}>
        <Text style={styles.nutrientTitle}>Nutrients</Text>
        <FlatList
          data={userData}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  ingredients: {
    flex: 0.5,
    marginTop: "8%",
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

  nutrientInformation: {
    flex: 0.45,
    marginTop: "8%",
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
    alignSelf: "center",
    marginBottom: "3%"
  },
  nutrientInfo: {
    fontSize: 22
  },
  row: {
    flexDirection: "row"
  },
  endRow: {
    textAlign: "right",
    fontSize: 22,
    alignSelf: "flex-end",
    position: "absolute",
    right: 20
  },
  ingredientInfo: {
    fontSize: 22,
    left: 20
  }
});
