import React, { useState } from "react";
import { View } from "react-native";

import * as colours from "../colours";
import Button from "./Button";
import DaySelector from "./DaySelector";
import Field from "./Field";
import IconInput from "./IconInput";
import Textbox from "./Textbox";
import { Habit } from "../store";
import { useValidationState } from "../useValidationState";

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

  const [isNameValid, isNameValidated, setNameValid] = useValidationState();

  const [isIconValid, isIconValidated, setIconValid] = useValidationState();

  const [
    isActiveDaysValid,
    isActiveDaysValidated,
    setActiveDaysValid,
  ] = useValidationState();

  function handleSubmit() {
    console.debug("submit");
    const isNameValid = name.trim() !== "";
    setNameValid(isNameValid);

    const isIconValid = props.habit.icon !== undefined;
    setIconValid(isIconValid);

    const isActiveDaysValid = days.length !== 0;
    setActiveDaysValid(isActiveDaysValid);

    if (!isNameValid || !isIconValid || !isActiveDaysValid) {
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
      <Field
        label="Name"
        help="What would you like to do?"
        error="Please enter a name"
        isValid={isNameValid}
        isValidated={isNameValidated}
      >
        <Textbox onChangeText={(text) => setName(text)} value={name} />
      </Field>

      <Field
        label="Icon"
        help="Tap to choose an icon for this habit"
        error="Please choose an icon"
        isValid={isIconValid}
        isValidated={isIconValidated}
      >
        <IconInput
          icon={props.habit.icon}
          onOpen={() => props.openIconSelect()}
        />
      </Field>

      <Field
        label="Active Days"
        help="Which days of the week do you need to do this habit?"
        error="Please select at least one day"
        isValid={isActiveDaysValid}
        isValidated={isActiveDaysValidated}
      >
        <DaySelector selectedDays={days} setDays={setDays} />
      </Field>

      <Button onPress={handleSubmit} style={{ marginTop: 32 }}>
        {props.submitMessage ?? "Create habit"}
      </Button>
    </View>
  );
};

export default HabitForm;
