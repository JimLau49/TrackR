import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarMaterial(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}