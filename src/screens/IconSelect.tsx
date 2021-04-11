import React from "react";
import { Pressable, View } from "react-native";

import * as colours from "../colours";
import BackButton from "../components/BackButton";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Stack from "../components/Stack";
import { Icon, iconToComponent } from "../icons";

const IconSelectScreen: React.FunctionComponent = ({ route }) => {
  const { onSelect } = route.params;

  function handlePress(icon: Icon) {
    onSelect(icon);
  }

  return (
    <Layout>
      <Stack space={24}>
        <BackButton />
        <Heading>Select an icon</Heading>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {Object.entries(iconToComponent).map(([icon, IconComponent]) => {
            return (
              <Pressable
                key={icon}
                style={{ cursor: "pointer", padding: 16 }}
                onPress={() => handlePress(icon as Icon)}
              >
                <IconComponent width={24} height={24} color={colours.white} />
              </Pressable>
            );
          })}
        </View>
      </Stack>
    </Layout>
  );
};

export default IconSelectScreen;
