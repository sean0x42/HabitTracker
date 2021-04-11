import React, { useState } from "react";
import { View } from "react-native";

import * as colours from "../colours";
import Box from "./Box";
import Button from "./Button";
import DaySelector from "./DaySelector";
import Field from "./Field";
import IconInput from "./IconInput";
import Textbox from "./Textbox";
import { Habit } from "../store";
import { useValidationState } from "../useValidationState";
import Stack from "./Stack";

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
    <Stack space={12}>
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
        label="Days"
        help="Which days of the week do you need to do this habit?"
        error="Please select at least one day"
        isValid={isActiveDaysValid}
        isValidated={isActiveDaysValidated}
      >
        <DaySelector selectedDays={days} setDays={setDays} />
      </Field>

      <Box marginTop={12}>
        <Button onPress={handleSubmit}>
          {props.submitMessage ?? "Create habit"}
        </Button>
      </Box>
    </Stack>
  );
};

export default HabitForm;
