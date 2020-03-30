import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { userReport } from "../constants/user-report.data";
import { Divider } from "react-native-elements";
export default function ReportScreen() {
  const [nutrients, setNutrients] = React.useState([...userReport]);

  const NutrientItem = ({ protein, calories, fat, cholesterol, sodium }) => {
    return (
      <View>
        <Text style={styles.nutrientInfo}>Calories: {calories}kCal</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>Protein: {protein}g</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>Fat: {fat}g</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>Cholesterol: {cholesterol}mg</Text>
        <Divider style={{ backgroundColor: "grey" }} />
        <Text style={styles.nutrientInfo}>Sodium: {sodium}mg</Text>
        <Divider style={{ backgroundColor: "grey" }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  nutrientInformation: {
    flex: 0.95,
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
    alignSelf: "center"
  },
  nutrientInfo: {
    fontSize: 22
  }
});
