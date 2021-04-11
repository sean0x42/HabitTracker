import React from "react";
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";
import {
  CalendarIcon,
  ClipboardListIcon,
  PlusIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import * as colours from "../colours";
import Text from "./Text";

interface NavButtonProps {
  icon: React.ComponentType;
  label: string;
  targetLocation: string;
  onPress: (name: string) => void;
}

const NavButton: React.FunctionComponent<NavButtonProps> = ({
  icon: Icon,
  label,
  targetLocation,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress(targetLocation)}
      style={{
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Icon style={{ width: 24, height: 24, color: colours.yellow }} />
      <Text style={{ color: colours.white, fontWeight: "500", marginTop: 4 }}>
        {label}
      </Text>
    </Pressable>
  );
};

const StartHabitButton: React.FunctionComponent = () => (
  <Pressable
    style={{
      cursor: "pointer",
      background: colours.grey700,
      borderRadius: 32,
      padding: 16,
      margin: -24,
      transform: [{ translateY: -36 }],
    }}
  >
    <PlusIcon width={28} height={28} color={colours.yellow} />
  </Pressable>
);

const TabBar: React.FunctionComponent<
  BottomTabBarProps<BottomTabBarOptions>
> = ({ state, descriptors, navigation }) => {
  const onPress = (target: string) => {
    navigation.navigate(target);
  };

  return (
    <View
      style={{
        background: colours.grey800,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <NavButton
        icon={PresentationChartBarIcon}
        label="Stats"
        targetLocation="Stats"
        onPress={onPress}
      />
      <NavButton
        icon={CalendarIcon}
        label="Today"
        targetLocation="DailyRundown"
        onPress={onPress}
      />
      <NavButton
        icon={ClipboardListIcon}
        label="Habits"
        targetLocation="ViewHabits"
        onPress={onPress}
      />
      <NavButton
        icon={SparklesIcon}
        label="Donate"
        targetLocation="Donate"
        onPress={onPress}
      />
    </View>
  );
};

export default TabBar;
