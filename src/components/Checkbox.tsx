import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { View } from "react-native";

import * as colours from "../colours";
import { useDispatch } from "../context";
import { ActionKind } from "../store";

interface CheckboxProps {
  id: number;
  isChecked: boolean;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => (
  <View
    style={{
      borderRadius: 3,
      width: 28,
      height: 28,
      background: colours.grey700,
    }}
  >
    {props.isChecked && (
      <CheckIcon width={28} height={28} style={{ color: colours.yellow }} />
    )}
  </View>
);

export default Checkbox;
