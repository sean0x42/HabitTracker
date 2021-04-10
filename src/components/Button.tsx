import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

import * as colours from "../colours";

interface ButtonProps {
  onPress?: () => void;
  style?: PressableProps["style"];
}

const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <Pressable
    onPress={props.onPress}
    style={{
      cursor: "pointer",
      background: colours.yellow,
      padding: 12,
      borderRadius: 4,
      ...props.style,
    }}
  >
    <Text style={{ fontWeight: "500", textAlign: "center" }}>
      {props.children}
    </Text>
  </Pressable>
);

export default Button;
