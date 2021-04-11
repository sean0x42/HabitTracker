import React from "react";
import { View } from "react-native";

interface StackProps {
  space?: number;
}

const Stack: React.FunctionComponent<StackProps> = ({
  space = 0,
  ...props
}) => {
  const children = React.Children.map(props.children, (child, idx) => (
    <View key={idx} style={{ marginTop: idx === 0 ? 0 : space }}>
      {child}
    </View>
  ));

  return <View>{children}</View>;
};

export default Stack;
