import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Search";
import React from "react";
import FilmDetail from "../FilmDetail";
import Favorites from "../Favorites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackingSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
      <Stack.Screen name="Film Detail" component={FilmDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rechercher" component={StackingSearch} />
      <Tab.Screen name="Favoris" component={Favorites} />
    </Tab.Navigator>
  );
};
export default Navigation;
