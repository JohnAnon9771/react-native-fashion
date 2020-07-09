import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default Routes;
