import React from "react";
import { View } from "react-native";

interface BoxProps {
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
}

const Box: React.FunctionComponent<BoxProps> = ({
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  ...props
}) => (
  <View style={{ margin, marginTop, marginBottom, marginVertical }}>
    {props.children}
  </View>
);

export default Box;
