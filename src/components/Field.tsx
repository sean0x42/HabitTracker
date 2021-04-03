import React from "react";
import { Text, View } from "react-native";

interface FieldProps {
  label: string;
}

const Field: React.FunctionComponent<FieldProps> = (props) => (
  <View style={{ marginVertical: 16 }}>
    <Text style={{ marginBottom: 8 }}>{props.label}</Text>
    {props.children}
  </View>
);

export default Field;
