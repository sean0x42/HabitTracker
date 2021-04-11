import React from "react";
import { ScrollView } from "react-native";
import * as colours from "../colours";

const Layout: React.FunctionComponent = (props) => (
  <ScrollView
    style={{
      paddingVertical: 32,
      paddingHorizontal: 24,
      background: colours.grey900,
    }}
  >
    {props.children}
  </ScrollView>
);

export default Layout;
