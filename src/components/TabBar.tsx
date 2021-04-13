import React from "react";
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";
import {
  CalendarIcon,
  ClipboardListIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import * as colours from "../colours";
import Text from "./Text";
import CreateHabitButton from "./CreateHabitButton";

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
}) => (
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

const TabBar: React.FunctionComponent<
  BottomTabBarProps<BottomTabBarOptions>
> = ({ state, descriptors, navigation }) => {
  const onPress = (target: string) => {
    navigation.navigate(target);
  };

  const isCreateHabitFocused = state.index === 2;
  const onPressCreateHabit = () => {
    if (!isCreateHabitFocused) {
      navigation.navigate("CreateHabit");
    } else {
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        background: colours.grey800,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-around",
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

      <CreateHabitButton
        isFocused={isCreateHabitFocused}
        onPress={onPressCreateHabit}
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
