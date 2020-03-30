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
  Picker,
  View,
  FlatList
} from "react-native";

export default function ConfirmExercise({ navigation, route }) {
  const { title } = route.params;
  const [pickerValue, setPickerValue] = React.useState();

  const setSelectedValue = itemIndex => {
    setPickerValue(itemIndex);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.addComponent}>
          <Text style={styles.title}>{title}</Text>
          <TextInput style={styles.numPad} keyboardType="number-pad" />
          <Picker
            selectedValue={pickerValue}
            onValueChange={pickerValue => {
              setSelectedValue(pickerValue);
            }}
          >
            <Picker.Item label="Minutes" value="1" />
            <Picker.Item label="Hours" value="60" />
          </Picker>
          <TouchableOpacity
            style={styles.addToJournalSubmit}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Add Exercise");
            }}
          >
            <Text style={styles.addToJournalTextStyle}> Add to journal </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}></View>
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
    alignSelf: "center",
    marginTop: "15%",
    marginBottom: "5%"
  },
  addComponent: {
    flex: 0.4
  },
  numPad: {
    fontSize: 22,
    marginTop: "2%",
    backgroundColor: "white",
    width: "40%",
    height: "8%",
    textAlign: "center",
    alignSelf: "center"
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
