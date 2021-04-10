import React from "react";
import { StyleProp, Text as ReactNativeText, TextStyle } from "react-native";

export interface TextProps {
  style: StyleProp<TextStyle>;
}

const Text: React.FunctionComponent = (props) => (
  <ReactNativeText style={{ fontFamily: "Plus Jakarta Sans", ...props.style }}>
    {props.children}
  </ReactNativeText>
);

export default Text;
