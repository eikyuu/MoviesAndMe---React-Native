import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Search";
import React from "react";

const Stack = createStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
    </Stack.Navigator>
  );
}
export default Navigation;
