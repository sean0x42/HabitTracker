import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

import * as colours from "../colours";

interface ButtonProps {
  onPress?: () => void;
  style?: PressableProps["style"];
  variant?: "primary" | "danger";
}

const variantStyles = {
  primary: {
    background: colours.yellow,
  },
  danger: {
    background: colours.red,
  },
};

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "primary",
  ...props
}) => (
  <Pressable
    onPress={props.onPress}
    style={{
      cursor: "pointer",
      padding: 12,
      borderRadius: 4,
      ...variantStyles[variant],
      ...props.style,
    }}
  >
    <Text style={{ fontWeight: "500", textAlign: "center" }}>
      {props.children}
    </Text>
  </Pressable>
);

export default Button;
