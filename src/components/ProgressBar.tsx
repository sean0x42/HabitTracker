import React from "react";
import { View } from "react-native";

import * as colours from "../colours";

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = (props) => {
  const percentage = (props.completed / props.total) * 100;

  return (
    <View
      style={{
        borderRadius: 8,
        height: 8,
        flexGrow: 1,
        background: colours.grey800,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: colours.yellow,
        }}
      />
    </View>
  );
};

export default ProgressBar;
