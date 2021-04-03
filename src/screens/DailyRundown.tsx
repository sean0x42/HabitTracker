import React from "react";
import { View, ScrollView, Text } from "react-native";

import Checkbox from "../components/Checkbox";
import NoHabitsTodayMessage from "../components/NoHabitsTodayMessage";
import { getDateKey, Habit } from "../store";
import { getDayToday } from "../day";
import { iconToComponent } from "../icons";
import { useSelector } from "../context";

interface HabitTodoProps {
  habit: Habit;
}

const HabitTodo: React.FunctionComponent<HabitTodoProps> = (props) => {
  const Icon = iconToComponent[props.habit.icon];

  const dateKey = getDateKey();
  const checkedHabits = useSelector((state) => state.history[dateKey]) ?? [];
  const checkedHabitIds = checkedHabits.map((habit) => habit.habitId);
  const isChecked = checkedHabitIds.includes(props.habit.id);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Icon width={28} height={28} style={{ marginRight: 8 }} />
      <Text style={{ flexGrow: 1 }}>{props.habit.name}</Text>
      <Checkbox id={props.habit.id} isChecked={isChecked} />
    </View>
  );
};

function DailyRundownScreen() {
  const habits = useSelector((state) => state.habits);

  const day = getDayToday();
  const habitsToRender = Object.values(habits).filter((habit) =>
    habit.days.includes(day)
  );

  return (
    <ScrollView style={{ padding: 16 }}>
      {habitsToRender.map((habit) => (
        <HabitTodo key={habit.id} habit={habit} />
      ))}

      {habitsToRender.length === 0 && <NoHabitsTodayMessage />}
    </ScrollView>
  );
}

export default DailyRundownScreen;
