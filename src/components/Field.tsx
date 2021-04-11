import React from "react";
import { View } from "react-native";

import * as colours from "../colours";
import Box from "./Box";
import Copy from "./Copy";
import Text from "./Text";

interface FieldProps {
  label: string;
  help?: string;
  error?: string;
  isValid?: boolean;
  isValidated?: boolean;
}

const Field: React.FunctionComponent<FieldProps> = (props) => (
  <View>
    <Copy variant="bold">{props.label}</Copy>

    {props.help && <Copy variant="light">{props.help}</Copy>}

    <Box marginVertical={4}>
      <View>{props.children}</View>
    </Box>

    {props.isValidated && !props.isValid && props.error && (
      <Copy variant="danger">{props.error}</Copy>
    )}
  </View>
);

export default Field;
