import React from "react";

import * as colours from "../colours";
import Text from "./Text";

interface CopyProps {
  variant?: "normal" | "bold" | "light" | "danger";
}

const variantStyles = {
  normal: {
    color: colours.grey100,
  },
  bold: {
    color: colours.white,
    fontWeight: "500",
  },
  light: {
    color: colours.grey300,
  },
  danger: {
    color: colours.red,
    fontWeight: "500",
  },
};

const Copy: React.FunctionComponent<CopyProps> = ({
  variant = "normal",
  ...props
}) => (
  <Text
    style={{
      lineHeight: "160%",
      ...variantStyles[variant],
    }}
  >
    {props.children}
  </Text>
);

export default Copy;
