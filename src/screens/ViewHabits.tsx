import React from "react";
import { Pressable, ScrollView, Text } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { useSelector } from "../context";
import { Icon, iconToComponent } from "../icons";
import { Habit } from "../store";
import EditHabitScreen from "./EditHabit";
import IconSelectScreen from "./IconSelect";

interface HabitProps {
  habit: Habit;
  onPress: (id: number) => void;
}

const HabitItem: React.FunctionComponent<HabitProps> = (props) => {
  const Icon = iconToComponent[props.habit.icon];

  return (
    <Pressable
      onPress={() => props.onPress(props.habit.id)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginBottom: 8,
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Icon width={28} height={28} style={{ marginRight: 8 }} />
      <Text>{props.habit.name}</Text>
    </Pressable>
  );
};

interface ViewHabitsProps {
  navigation: StackNavigationProp<ViewHabitStackParams, "ViewHabits">;
}

const ViewHabits: React.FunctionComponent<ViewHabitsProps> = ({
  navigation,
}) => {
  const habits = useSelector((state) => state.habits);

  function handleHabitPress(id: number) {
    navigation.navigate("EditHabit", { id });
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      {Object.values(habits).map((habit) => (
        <HabitItem key={habit.id} habit={habit} onPress={handleHabitPress} />
      ))}
    </ScrollView>
  );
};

export type ViewHabitStackParams = {
  ViewHabits: undefined;
  EditHabit: {
    id: number;
    icon?: Icon;
  };
  IconSelect: {
    onSelect: (icon: Icon) => void;
  };
};

const ViewHabitsStack = createStackNavigator<ViewHabitStackParams>();

const ViewHabitsScreen = () => (
  <ViewHabitsStack.Navigator initialRouteName="ViewHabits">
    <ViewHabitsStack.Screen
      name="ViewHabits"
      component={ViewHabits}
      options={{ title: "My Habits" }}
    />

    <ViewHabitsStack.Screen
      name="EditHabit"
      component={EditHabitScreen}
      options={{ title: "Edit Habit" }}
    />

    <ViewHabitsStack.Screen
      name="IconSelect"
      component={IconSelectScreen}
      options={{ title: "Select an icon" }}
    />
  </ViewHabitsStack.Navigator>
);

export default ViewHabitsScreen;
