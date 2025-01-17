import * as React from "react";
import { Octicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Octicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
