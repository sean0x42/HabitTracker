import { useState } from "react";

export function useValidationState(): [
  boolean,
  boolean,
  (valid: boolean) => void
] {
  const [isValid, setValid] = useState(false);
  const [isValidated, setValidated] = useState(false);

  const setIsValid = (valid: boolean) => {
    setValid(valid);
    setValidated(true);
  };

  return [isValid, isValidated, setIsValid];
}
