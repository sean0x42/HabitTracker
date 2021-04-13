import React from "react";
import { ScrollView } from "react-native";

import * as colours from "../colours";
import Box from "./Box";
import CreateHabitButton from "./CreateHabitButton";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = (props) => (
  <ScrollView
    style={{
      paddingVertical: 32,
      paddingHorizontal: 24,
      background: colours.grey900,
    }}
  >
    <Box marginBottom={32}>{props.children}</Box>
  </ScrollView>
);

export default Layout;
