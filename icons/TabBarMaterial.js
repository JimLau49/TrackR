import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarMaterialIcons(props) {
  return (
    <MaterialIcons
      name={props.name}
      size={45}
      style={{ marginBottom: -2 }}
      color="black"
    />
  );
}
