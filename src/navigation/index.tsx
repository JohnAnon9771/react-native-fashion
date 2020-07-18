import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import Welcome from "../screens/Welcome";

import { StackParamList } from "./types";

const Stack = createStackNavigator<StackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default Routes;
