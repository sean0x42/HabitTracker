import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Pressable } from "react-native";

import * as colours from "../colours";

interface CreateHabitButtonProps {
  isFocused: boolean;
  onPress: () => void;
}

const CreateHabitButton: React.FunctionComponent<CreateHabitButtonProps> = ({
  isFocused,
  onPress,
}) => (
  <Pressable
    onPress={() => onPress()}
    style={{
      marginVertical: -16,
      width: 56,
      height: 56,
      cursor: "pointer",
      background: colours.grey700,
      borderRadius: 32,
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 200ms",
      transform: [
        { translateY: -26 },
        { rotate: isFocused ? "135deg" : "0deg" },
      ],
    }}
  >
    <PlusIcon width={28} height={28} color={colours.yellow} />
  </Pressable>
);

export default CreateHabitButton;
