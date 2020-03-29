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
        
        <View style={styles.foodIcon}>
          <TabBarMaterial name="restaurant-menu" color="black" />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
        <View style={styles.addComponent}>
        
          <Text style={styles.quantity}>Quantity</Text>  
          <TextInput style={styles.numPad} keyboardType="number-pad" />
          <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => navigation.navigate("Search Item")}
          >
            <Text style={styles.TextStyle}> Add to journal </Text>
                
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
        <View style={styles.nutrientInformation}>

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
  addComponent:{
    flex:0.4
  },
  numPad: {
    fontSize: 22,
    marginTop: "2%",
    marginStart: "9%",
    backgroundColor: "white",
    width: "20%",
    height: "15%",
    textAlign: "center"
  },
  quantity: {
    marginTop: "5%",
    marginLeft: "8%",
    fontSize: 35,
  
  },
  addToJournal: {
    alignSelf: "center",
    marginTop: "5%"
  },
  addComponent: {
    flexDirection: "column",
  },
  touchable: {
    position: "relative"
  },
  foodIcon: {
    marginTop: "6%",
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
    borderRadius:20,
  },
  SubmitButtonStyle: {
    opacity: 0.8,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginTop: 20,
    marginLeft:35,
    marginRight:35,
    backgroundColor:'#EC3535',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },

  TextStyle:{
      color:'black',
      textAlign:'center',
      fontSize: 22
  }
});
