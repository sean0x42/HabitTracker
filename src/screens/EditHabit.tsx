import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import HabitForm from "../components/HabitForm";
import { ActionKind, Habit } from "../store";
import { ViewHabitStackParams } from "./ViewHabits";
import { useDispatch, useSelector } from "../context";
import { Icon } from "../icons";

interface EditHabitProps {
  route: RouteProp<ViewHabitStackParams, "EditHabit">;
  navigation: StackNavigationProp<ViewHabitStackParams, "EditHabit">;
}

const EditHabitScreen: React.FunctionComponent<EditHabitProps> = ({
  route,
  navigation,
}) => {
  const { id, icon } = route.params;
  const dispatch = useDispatch();

  const habit = useSelector((state) => state.habits[id]);

  function handleSave(habit: Omit<Habit, "id">) {
    dispatch({
      kind: ActionKind.UpdateHabit,
      payload: {
        id,
        ...habit,
        icon: icon ?? habit.icon,
      },
    });
    navigation.navigate("ViewHabits");
  }

  function openIconSelect() {
    navigation.navigate("IconSelect", {
      onSelect: (icon: Icon) => {
        navigation.navigate("EditHabit", { id, icon });
      },
    });
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      <HabitForm
        habit={{ ...habit, icon: icon ?? habit.icon }}
        onSave={handleSave}
        openIconSelect={openIconSelect}
        submitMessage="Save changes"
      />
    </ScrollView>
  );
};

export default EditHabitScreen;
