import React from "react";
import { Pressable, View } from "react-native";
import { MinusIcon } from "@heroicons/react/outline";

import * as colours from "../colours";
import { Icon, iconToComponent } from "../icons";

interface IconInputProps {
  icon?: Icon;
  onOpen: () => void;
}

const IconInput: React.FunctionComponent<IconInputProps> = ({
  icon,
  onOpen,
}) => {
  const Icon = icon && iconToComponent[icon];

  return (
    <Pressable
      onPress={onOpen}
      style={{
        cursor: "pointer",
        borderRadius: 4,
        background: colours.grey800,
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Icon ? (
        <Icon width={24} height={24} style={{ color: colours.yellow }} />
      ) : (
        <MinusIcon width={24} height={24} style={{ color: colours.grey300 }} />
      )}
    </Pressable>
  );
};

export default IconInput;
