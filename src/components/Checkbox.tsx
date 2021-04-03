import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { Pressable } from "react-native";

import { useDispatch } from "../context";
import { ActionKind } from "../store";

interface CheckboxProps {
  id: number;
  isChecked: boolean;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
  const dispatch = useDispatch();

  function onCheck() {
    dispatch({
      kind: props.isChecked
        ? ActionKind.UndoCompleteHabit
        : ActionKind.CompleteHabit,
      payload: props.id,
    });
  }

  return (
    <Pressable
      style={{
        padding: 4,
        borderColor: "#bbb",
        borderWidth: 2,
        borderRadius: 3,
        width: 40,
        height: 40,
      }}
      onPress={onCheck}
    >
      {props.isChecked && <CheckIcon width={28} height={28} />}
    </Pressable>
  );
};

export default Checkbox;
