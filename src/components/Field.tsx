import React from "react";
import { View } from "react-native";

import * as colours from "../colours";
import Text from "./Text";

interface FieldProps {
  label: string;
  help?: string;
  error?: string;
  isValid?: boolean;
  isValidated?: boolean;
}

const Field: React.FunctionComponent<FieldProps> = (props) => (
  <View style={{ marginVertical: 12 }}>
    <Text style={{ marginBottom: 4, color: colours.white, fontWeight: "500" }}>
      {props.label}
    </Text>

    {props.help && (
      <Text style={{ marginBottom: 4, color: colours.grey200 }}>
        {props.help}
      </Text>
    )}

    <View style={{ marginTop: 8 }}>{props.children}</View>

    {props.isValidated && !props.isValid && props.error && (
      <Text style={{ color: colours.red, marginTop: 12, fontWeight: "500" }}>
        {props.error}
      </Text>
    )}
  </View>
);

export default Field;
