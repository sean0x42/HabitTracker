import React from "react";
import { Linking, Pressable } from "react-native";

import * as colours from "../colours";
import Text from "./Text";

interface LinkProps {
  to: string;
}

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const handlePress = () => {
    Linking.openURL(props.to);
  };

  return (
    <Pressable style={{ cursor: "pointer" }} onPress={handlePress}>
      <Text style={{ color: colours.yellow, textDecoration: "underline" }}>
        {props.children}
      </Text>
    </Pressable>
  );
};

export default Link;
