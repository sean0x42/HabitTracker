import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalendarIcon,
  ClipboardListIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

import DailyRundownScreen from "./src/screens/DailyRundown";
import CreateHabitScreen from "./src/screens/CreateHabit";
import ViewHabitsScreen from "./src/screens/ViewHabits";
import { initialState, reducer } from "./src/store";
import { StoreContext } from "./src/context";

const Tabs = createBottomTabNavigator();

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="DailyRundown">
          <Tabs.Screen
            name="DailyRundown"
            component={DailyRundownScreen}
            options={{
              tabBarLabel: "Today",
              tabBarIcon: ({ color, size }) => (
                <CalendarIcon color={color} width={size} height={size} />
              ),
            }}
          />

          <Tabs.Screen
            name="CreateHabit"
            component={CreateHabitScreen}
            options={{
              tabBarLabel: "Create",
              tabBarIcon: ({ color, size }) => (
                <PencilAltIcon color={color} width={size} height={size} />
              ),
            }}
          />

          <Tabs.Screen
            name="ViewHabits"
            component={ViewHabitsScreen}
            options={{
              tabBarLabel: "Habits",
              tabBarIcon: ({ color, size }) => (
                <ClipboardListIcon color={color} width={size} height={size} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;
