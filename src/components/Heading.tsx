import React from "react";
import * as colours from "../colours";
import Text, { TextProps } from "./Text";

interface HeadingProps {
  level?: 1 | 2;
  style: TextProps["style"];
}

const levelToFontSize = {
  1: 28,
  2: 16,
};

const levelToWeight = {
  1: "bold",
  2: "bold",
};

const Heading: React.FunctionComponent<HeadingProps> = ({
  level = 1,
  ...props
}) => (
  <Text
    style={{
      color: colours.white,
      fontWeight: levelToWeight[level],
      fontSize: levelToFontSize[level],
      ...props.style,
    }}
  >
    {props.children}
  </Text>
);

export default Heading;
