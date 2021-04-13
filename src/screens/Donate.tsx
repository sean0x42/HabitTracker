import React from "react";
import { Linking } from "react-native";

import Button from "../components/Button";
import Copy from "../components/Copy";
import Eyebrow from "../components/Eyebrow";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Link from "../components/Link";
import Stack from "../components/Stack";

const DonateScreen: React.FunctionComponent = () => {
  const onPress = () => {
    Linking.openURL("https://www.buymeacoffee.com/seanbailey");
  };

  return (
    <Layout>
      <Eyebrow>Donate</Eyebrow>
      <Heading style={{ marginBottom: 16 }}>Support Habit Tracker</Heading>

      <Stack space={16}>
        <Copy>👋 Hi</Copy>

        <Copy>
          My name is{" "}
          <Link to="https://www.seanbailey.dev?utm_source=HabitTracker">
            Sean Bailey
          </Link>
          . I'm a software developer and designer in Australia. I made this app
          with a simple aim: to help build and maintain habits in my personal
          life.
        </Copy>

        <Copy>
          This app is not trying to be "the next big thing". It's humble,
          reliable, and does exactly what it says on the tin. It contains ZERO
          advertisements, and no paid plans to lock features behind a pay wall.
        </Copy>

        <Copy>
          If you'd like to support an independent creator, and a simple app,
          please consider making a small donation using the button below.
        </Copy>

        <Copy>Cheers, Sean</Copy>

        <Button onPress={onPress}>Open donation website</Button>

        <Copy variant="light">
          Your donation will be managed by buymeacoffee.com.
        </Copy>
      </Stack>
    </Layout>
  );
};

export default DonateScreen;
