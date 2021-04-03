import React from "react";
import { Pressable, ScrollView } from "react-native";
import { Icon, iconToComponent } from "../icons";

const IconSelectScreen: React.FunctionComponent = ({ route }) => {
  const { onSelect } = route.params;

  function handlePress(icon: Icon) {
    onSelect(icon);
  }

  return (
    <ScrollView
      style={{
        padding: 16,
      }}
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {Object.entries(iconToComponent).map(([icon, IconComponent]) => {
        return (
          <Pressable
            key={icon}
            style={{ padding: 16 }}
            onPress={() => handlePress(icon as Icon)}
          >
            <IconComponent width={28} height={28} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default IconSelectScreen;
