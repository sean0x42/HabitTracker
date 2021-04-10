import React from "react";
import { TextInput } from "react-native";

import * as colours from "../colours";

interface TextboxProps {
  onChangeText?: (text: string) => void;
  value?: string;
}

const Textbox: React.FunctionComponent<TextboxProps> = (props) => (
  <TextInput
    style={{
      background: colours.grey800,
      color: colours.white,
      padding: 16,
      borderRadius: 4,
    }}
    value={props.value}
    onChangeText={props.onChangeText}
  />
);

export default Textbox;
