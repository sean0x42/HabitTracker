import React from "react";
import { Button, View } from "react-native";
import { Day } from "../day";

interface DayButtonProps {
  selectedDays: Day[];
  day: Day;
  onToggle: (day: Day) => void;
}

const labelMap: Record<Day, string> = {
  [Day.Monday]: "Monday",
  [Day.Tuesday]: "Tuesday",
  [Day.Wednesday]: "Wednesday",
  [Day.Thursday]: "Thursday",
  [Day.Friday]: "Friday",
  [Day.Saturday]: "Saturday",
  [Day.Sunday]: "Sunday",
};

const DayButton: React.FunctionComponent<DayButtonProps> = (props) => (
  <Button
    title={labelMap[props.day]}
    onPress={() => props.onToggle(props.day)}
    color={props.selectedDays.includes(props.day) ? "blue" : "red"}
  />
);

interface DaySelectorProps {
  selectedDays: Day[];
  setDays: (days: Day[]) => void;
}

const DaySelector: React.FunctionComponent<DaySelectorProps> = (props) => {
  function toggleDay(day: Day) {
    const dayIndex = props.selectedDays.indexOf(day);

    if (dayIndex === -1) {
      props.setDays([...props.selectedDays, day]);
    } else {
      const days = [...props.selectedDays];
      days.splice(dayIndex, 1);
      props.setDays(days);
    }
  }

  return (
    <View>
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Monday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Tuesday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Wednesday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Thursday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Friday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Saturday}
        onToggle={toggleDay}
      />
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Sunday}
        onToggle={toggleDay}
      />
    </View>
  );
};

export default DaySelector;
