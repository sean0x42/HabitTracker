import React from "react";
import { Pressable } from "react-native";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useNavigation } from "@react-navigation/native";

import * as colours from "../colours";
import Text from "./Text";

const BackButton: React.FunctionComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      style={{ cursor: "pointer", alignItems: "center", flexDirection: "row" }}
      onPress={handlePress}
    >
      <ArrowNarrowLeftIcon
        width={24}
        height={24}
        color={colours.grey200}
        style={{ marginRight: 8 }}
      />
      <Text style={{ color: colours.grey100, fontWeight: "bold" }}>Back</Text>
    </Pressable>
  );
};

export default BackButton;
