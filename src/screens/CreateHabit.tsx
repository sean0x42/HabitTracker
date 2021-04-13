import React from "react";
import { ScrollView, View } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import * as colours from "../colours";
import BackButton from "../components/BackButton";
import Eyebrow from "../components/Eyebrow";
import HabitForm from "../components/HabitForm";
import Heading from "../components/Heading";
import IconSelectScreen from "./IconSelect";
import Layout from "../components/Layout";
import Stack from "../components/Stack";
import { Day } from "../day";
import { Icon } from "../icons";
import { createHabit } from "../store/habitSlice";
import { useDispatch } from '../app/hooks';

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
    dispatch(createHabit(habit));
    navigation.navigate("DailyRundown");
  }

  function openIconSelect() {
    navigation.navigate("IconSelect", {
      onSelect: (icon: Icon) => {
        navigation.navigate("CreateHabit", { icon });
      },
    });
  }

  return (
    <Layout>
      <Stack space={24}>
        <BackButton />
        <View>
          <Eyebrow>Create habit</Eyebrow>
          <Heading>Start a new habit</Heading>
        </View>

        <HabitForm
          habit={{ name: "", days: [...defaultDays], icon }}
          onSave={handleSubmit}
          openIconSelect={openIconSelect}
        />
      </Stack>
    </Layout>
  );
};

const CreateHabitScreen: React.FunctionComponent = () => (
  <CreateHabitStack.Navigator initialRouteName="CreateHabit" headerMode="none">
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
