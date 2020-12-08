import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SpendAdd, GroupAdd } from "./pages";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="SpendAddPage" component={SpendAdd} />
      <Tab.Screen name="GroupAddPage" component={GroupAdd} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Router
