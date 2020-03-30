import * as React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function TabBarMaterialIcons(props) {
  return (
    <AntDesign
      name={props.name}
      size={40}
      style={{ marginBottom: -2 }}
      color="black"
    />
  );
}
