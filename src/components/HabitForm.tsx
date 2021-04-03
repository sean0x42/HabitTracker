import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { Habit } from "../store";
import DaySelector from "./DaySelector";
import Field from "./Field";
import IconInput from "./IconInput";

interface HabitFormProps {
  habit: {
    name: Habit["name"];
    icon?: Habit["icon"];
    days: Habit["days"];
  };
  onSave: (habit: Omit<Habit, "id">) => void;
  openIconSelect: () => void;
  submitMessage?: string;
}

const HabitForm: React.FunctionComponent<HabitFormProps> = (props) => {
  const [name, setName] = useState(props.habit.name);
  const [days, setDays] = useState(props.habit.days);

  function handleSubmit() {
    // TODO improve form validation
    if (
      name.trim() === "" ||
      props.habit.icon === undefined ||
      days.length === 0
    ) {
      return;
    }

    props.onSave({
      name,
      days,
      icon: props.habit.icon,
    });
  }

  return (
    <View>
      <Field label="Habit name">
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={{ backgroundColor: "white", padding: 10 }}
        />
      </Field>

      <Field label="Icon">
        <IconInput
          icon={props.habit.icon}
          onOpen={() => props.openIconSelect()}
        />
      </Field>

      <Field label="Active Days">
        <DaySelector selectedDays={days} setDays={setDays} />
      </Field>

      <Button
        title={props.submitMessage ?? "Create habit"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default HabitForm;
