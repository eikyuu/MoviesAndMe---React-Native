import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Search";
import React from "react";
import FilmDetail from "../FilmDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
      <Stack.Screen name="Film Detail" component={FilmDetail} />
    </Stack.Navigator>
  );
}
export default Navigation;
