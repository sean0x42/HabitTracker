import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Button from "../components/Button";
import Copy from "../components/Copy";
import Eyebrow from "../components/Eyebrow";
import HabitForm from "../components/HabitForm";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Stack from "../components/Stack";
import { ActionKind, Habit } from "../store";
import { Icon } from "../icons";
import { ViewHabitStackParams } from "./ViewHabits";
import { useDispatch, useSelector } from "../context";
import Box from "../components/Box";
import BackButton from "../components/BackButton";

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
    <Layout>
      <Stack space={24}>
        <BackButton />
        <View>
          <Eyebrow>Edit Habit</Eyebrow>
          <Heading>{habit.name}</Heading>
        </View>

        <HabitForm
          habit={{ ...habit, icon: icon ?? habit.icon }}
          onSave={handleSave}
          openIconSelect={openIconSelect}
          submitMessage="Update habit"
        />
      </Stack>

      <Box marginTop={64} marginBottom={24}>
        <Stack space={12}>
          <Stack space={4}>
            <Heading level={2}>Danger Zone</Heading>
            <Copy>Warning! These actions cannot be undone.</Copy>
          </Stack>

          <Button variant="danger">Delete this task</Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default EditHabitScreen;
