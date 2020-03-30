import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarMaterialCommunity from "../icons/TabBarMaterialCommunity";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/ReportScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Me",
          tabBarIcon: ({ focused }) => (
            <TabBarMaterialCommunity focused={focused} name="face" />
          )
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={LinksScreen}
        options={{
          title: "Report",
          tabBarIcon: ({ focused }) => (
            <TabBarMaterialCommunity
              focused={focused}
              name="file-document-outline"
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "My Profile";
    case "Report":
      return "My Report";
  }
}
