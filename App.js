import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import addMeal from "./components/addMeal";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import LandingScreen from "./screens/LandingScreen";
import searchItem from "./components/searchItem";
import ConfirmItem from "./components/confirmItem";
import addExercise from "./components/addExercise";
import { UserProvider } from "./context/userData.context";
import ConfirmExercise from "./components/ConfirmExercise";
import updateItem from "./components/updateItem";
import Recipe from "./components/Recipe";
import useForceUpdate from 'use-force-update';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isLandingPageOpen, setLandingPageOpen] = React.useState(true);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [currentUserData, setCurrentUserData] = React.useState([
  {
      id: "0",
      calories: 0,
      protein: 0,
      fat: 0,
      sodium: 0,
      cholesterol: 0
    }
  ]);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const setLandingPageClosed = () => {
    setLandingPageOpen(false);
  };
  
  const forceUpdate = useForceUpdate();
  const userDataUpdated = (updateData) => {
  
    setCurrentUserData(updateData);
    forceUpdate();
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {/* {Platform.OS === "ios" && <StatusBar barStyle="default" />} */}

        {isLandingPageOpen ? (
          <LandingScreen setLandingPageOpen={setLandingPageClosed} />
        ) : (
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <UserProvider value={{currentUserData, userDataUpdated}}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="Add Meal" component={addMeal} />
                <Stack.Screen name="Search Item" component={searchItem} />
                <Stack.Screen name="Confirm Item" component={ConfirmItem} />
                <Stack.Screen name="Add Exercise" component={addExercise} />
                <Stack.Screen name="Update Item" component={updateItem} />
                <Stack.Screen name="Recipe" component={Recipe} />
                <Stack.Screen
                  name="Confirm Exercise"
                  component={ConfirmExercise}
                />
              </Stack.Navigator>
            </UserProvider>
          </NavigationContainer>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center"
  }
});
