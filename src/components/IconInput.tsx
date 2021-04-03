import React from "react";
import { Button, View } from "react-native";
import { Icon, iconToComponent } from "../icons";

interface IconInputProps {
  icon?: Icon;
  onOpen: () => void;
}

const IconInput: React.FunctionComponent<IconInputProps> = ({
  icon,
  onOpen,
}) => {
  const Icon = icon && iconToComponent[icon];

  return (
    <View>
      {Icon && (
        <View style={{ padding: 16 }}>
          <Icon width={28} height={28} />
        </View>
      )}
      <Button title="Open icon select" onPress={onOpen} />
    </View>
  );
};

export default IconInput;
