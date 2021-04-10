import React from "react";
import { Pressable, View } from "react-native";

import * as colours from "../colours";
import Text from "./Text";
import { Day } from "../day";

interface DayButtonProps {
  selectedDays: Day[];
  day: Day;
  onToggle: (day: Day) => void;
}

const labelMap: Record<Day, string> = {
  [Day.Sunday]: "S",
  [Day.Monday]: "M",
  [Day.Tuesday]: "T",
  [Day.Wednesday]: "W",
  [Day.Thursday]: "T",
  [Day.Friday]: "F",
  [Day.Saturday]: "S",
};

const DayButton: React.FunctionComponent<DayButtonProps> = (props) => {
  const isChecked = props.selectedDays.includes(props.day);

  return (
    <Pressable
      onPress={() => props.onToggle(props.day)}
      style={{
        cursor: "pointer",
        borderRadius: 16,
        width: 32,
        height: 32,
        background: isChecked ? colours.yellow : colours.grey700,
        color: isChecked ? colours.grey900 : colours.grey200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          lineHeight: 1,
          fontSize: 16,
          fontWeight: "500",
          color: isChecked ? colours.grey900 : colours.grey200,
          textAlign: "center",
        }}
      >
        {labelMap[props.day]}
      </Text>
    </Pressable>
  );
};

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
    <View
      style={{
        background: colours.grey800,
        borderRadius: 4,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <DayButton
        selectedDays={props.selectedDays}
        day={Day.Sunday}
        onToggle={toggleDay}
      />
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
    </View>
  );
};

export default DaySelector;
