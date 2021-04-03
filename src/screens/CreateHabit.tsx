import React from "react";
import { ScrollView } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import HabitForm from "../components/HabitForm";
import IconSelectScreen from "./IconSelect";
import { ActionKind, Habit } from "../store";
import { Icon } from "../icons";
import { useDispatch } from "../context";
import { Day } from "../day";

type CreateHabitStackParamList = {
  CreateHabit: { icon: Icon } | undefined;
  IconSelect: {
    onSelect: (icon: Icon) => void;
  };
};

const CreateHabitStack = createStackNavigator<CreateHabitStackParamList>();

interface CreateHabitProps {
  route: RouteProp<CreateHabitStackParamList, "CreateHabit">;
  navigation: StackNavigationProp<CreateHabitStackParamList, "CreateHabit">;
}

const defaultDays = [
  Day.Monday,
  Day.Tuesday,
  Day.Wednesday,
  Day.Thursday,
  Day.Friday,
];

const CreateHabit: React.FunctionComponent<CreateHabitProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const icon = route.params?.icon;

  function handleSubmit(habit: Omit<Habit, "id">) {
    dispatch({
      kind: ActionKind.CreateHabit,
      payload: habit,
    });
  }

  function openIconSelect() {
    navigation.navigate("IconSelect", {
      onSelect: (icon: Icon) => {
        navigation.navigate("CreateHabit", { icon });
      },
    });
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      <HabitForm
        habit={{ name: "", days: [...defaultDays], icon }}
        onSave={handleSubmit}
        openIconSelect={openIconSelect}
        submitMessage="Create new habit"
      />
    </ScrollView>
  );
};

const CreateHabitScreen: React.FunctionComponent = () => (
  <CreateHabitStack.Navigator initialRouteName="CreateHabit">
    <CreateHabitStack.Screen
      name="CreateHabit"
      component={CreateHabit}
      options={{ title: "Create a habit" }}
    />

    <CreateHabitStack.Screen
      name="IconSelect"
      component={IconSelectScreen}
      options={{ title: "Select an icon" }}
    />
  </CreateHabitStack.Navigator>
);

export default CreateHabitScreen;
