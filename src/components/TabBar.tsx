import React from "react";
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";

import * as colours from "../colours";
import Text from "./Text";

const TabBar: React.FunctionComponent<
  BottomTabBarProps<BottomTabBarOptions>
> = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        background: colours.grey800,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable onPress={onPress} style={{ cursor: "pointer" }}>
            <Text style={{ color: colours.white, fontWeight: "500" }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
