import React from "react";

import * as colours from "../colours";
import Text, { TextProps } from "./Text";

interface EyebrowProps {
  style: TextProps["style"];
}

const Eyebrow: React.FunctionComponent<EyebrowProps> = (props) => (
  <Text
    style={{
      color: colours.yellow,
      fontSize: 12,
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: 2,
      ...props.styles,
    }}
  >
    {props.children}
  </Text>
);

export default Eyebrow;
