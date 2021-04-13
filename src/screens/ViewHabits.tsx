import React from "react";
import { useSelector } from "react-redux";
import { Pressable, ScrollView, Text } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import * as colours from "../colours";
import EditHabitScreen from "./EditHabit";
import Heading from "../components/Heading";
import IconSelectScreen from "./IconSelect";
import Layout from "../components/Layout";
import { Habit } from "../store";
import { Icon, iconToComponent } from "../icons";

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
        cursor: "pointer",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginBottom: 8,
        backgroundColor: colours.grey800,
        borderRadius: 4,
      }}
    >
      <Icon
        width={24}
        height={24}
        style={{ marginRight: 12, color: colours.yellow }}
      />

      <Text style={{ flexGrow: 1, color: colours.white, fontWeight: "500" }}>
        {props.habit.name}
      </Text>
    </Pressable>
  );
};

interface ViewHabitsProps {
  navigation: StackNavigationProp<ViewHabitStackParams, "ViewHabits">;
}

const ViewHabits: React.FunctionComponent<ViewHabitsProps> = ({
  navigation,
}) => {
  const habits = useSelector((state) => state.habits.byId);

  function handleHabitPress(id: number) {
    navigation.navigate("EditHabit", { id });
  }

  return (
    <Layout>
      <Heading style={{ marginBottom: 24 }}>My Habits</Heading>

      {Object.values(habits).map((habit) => (
        <HabitItem key={habit.id} habit={habit} onPress={handleHabitPress} />
      ))}
    </Layout>
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
  <ViewHabitsStack.Navigator initialRouteName="ViewHabits" headerMode="none">
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
