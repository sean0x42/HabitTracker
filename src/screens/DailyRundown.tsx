import React from "react";
import dayjs from "dayjs";
import { Pressable, View, ScrollView } from "react-native";

import * as colours from "../colours";
import Blob from "../components/Blob";
import Checkbox from "../components/Checkbox";
import Eyebrow from "../components/Eyebrow";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import NoHabitsTodayMessage from "../components/NoHabitsTodayMessage";
import ProgressBar from "../components/ProgressBar";
import Text from "../components/Text";
import { Habit } from "../store/habitsSlice";
import {
  getDateKey,
  completeHabit,
  undoCompleteHabit,
} from "../store/historySlice";
import { dayToHuman, getDayToday } from "../day";
import { iconToComponent } from "../icons";
import { useDispatch, useSelector } from "../app/hooks";

interface HabitTodoProps {
  habit: Habit;
}

const HabitTodo: React.FunctionComponent<HabitTodoProps> = (props) => {
  const dispatch = useDispatch();

  const Icon = iconToComponent[props.habit.icon];

  const dateKey = getDateKey();
  const checkedHabits = useSelector((state) => state.history[dateKey]) ?? [];
  const checkedHabitIds = checkedHabits.map((habit) => habit.habitId);
  const isChecked = checkedHabitIds.includes(props.habit.id);

  function handlePress() {
    const id = props.habit.id;
    dispatch(isChecked ? undoCompleteHabit(id) : completeHabit(id));
  }

  return (
    <Pressable
      onPress={handlePress}
      style={{
        cursor: "pointer",
        padding: 16,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colours.grey800,
        borderRadius: 4,
      }}
    >
      <Icon
        width={24}
        height={24}
        style={{
          color: isChecked ? colours.grey400 : colours.yellow,
          marginRight: 12,
        }}
      />

      <Text
        style={{
          flexGrow: 1,
          color: isChecked ? colours.grey300 : colours.white,
          textDecorationLine: isChecked ? "line-through" : "none",
          fontWeight: "500",
        }}
      >
        {props.habit.name}
      </Text>

      <Checkbox id={props.habit.id} isChecked={isChecked} />
    </Pressable>
  );
};

function DailyRundownScreen() {
  const habits = useSelector((state) => state.habits.byId);

  const dateKey = getDateKey();
  const checkedHabits = useSelector((state) => state.history[dateKey]) ?? [];
  const checkedHabitIds = checkedHabits.map((habit) => habit.habitId);
  console.debug({ checkedHabitIds })

  const day = getDayToday();

  const todaysHabits = Object.values(habits).filter((habit) =>
    habit.days.includes(day)
  );
  const incompleteHabits = todaysHabits.filter(
    (habit) => !checkedHabitIds.includes(habit.id)
  );
  const completeHabits = todaysHabits.filter((habit) =>
    checkedHabitIds.includes(habit.id)
  );

  const heading = dayjs().format("dddd, MMMM D");

  return (
    <Layout>
      <Eyebrow>Daily Breakdown</Eyebrow>
      <Heading style={{ marginBottom: 24 }}>{heading}</Heading>

      {incompleteHabits.map((habit) => (
        <HabitTodo key={habit.id} habit={habit} />
      ))}

      {incompleteHabits.length === 0 && (
        <View style={{ marginVertical: 0 }}>
          <Blob />
          <Text
            style={{
              position: "absolute",
              top: "40%",
              color: colours.white,
              textAlign: "center",
              fontSize: 21,
              fontWeight: "500",
              lineHeight: "110%",
              paddingHorizontal: 24,
            }}
          >
            You've finished all your tasks for the day!
          </Text>
        </View>
      )}

      <View
        style={{
          marginVertical: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading level={2} style={{ marginRight: 64, lineHeight: "100%" }}>
          Completed
        </Heading>
        <ProgressBar
          completed={completeHabits.length}
          total={todaysHabits.length}
        />
      </View>

      {completeHabits.map((habit) => (
        <HabitTodo key={habit.id} habit={habit} />
      ))}

      {todaysHabits.length === 0 && <NoHabitsTodayMessage />}
    </Layout>
  );
}

export default DailyRundownScreen;
