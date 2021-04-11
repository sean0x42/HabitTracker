import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalendarIcon,
  ClipboardListIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

import * as colours from "./src/colours";
import CreateHabitScreen from "./src/screens/CreateHabit";
import DailyRundownScreen from "./src/screens/DailyRundown";
import DonateScreen from "./src/screens/Donate";
import TabBar from "./src/components/TabBar";
import StatsScreen from "./src/screens/Stats";
import ViewHabitsScreen from "./src/screens/ViewHabits";
import { StoreContext } from "./src/context";
import { initialState, reducer } from "./src/store";

const Tabs = createBottomTabNavigator();

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="DailyRundown"
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tabs.Screen name="Stats" component={StatsScreen} />
          <Tabs.Screen name="DailyRundown" component={DailyRundownScreen} />
          <Tabs.Screen name="CreateHabit" component={CreateHabitScreen} />
          <Tabs.Screen name="ViewHabits" component={ViewHabitsScreen} />
          <Tabs.Screen name="Donate" component={DonateScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;
