import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


import { SpendAdd, GroupAdd } from "./pages";
import BottomNavigator from './components/BottomNavigator';

const Tab = createBottomTabNavigator();


const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
      
            if (route.name === 'SpendAddPage') {
              iconName = "user"
            } else if (route.name === 'GroupAddPage') {
              iconName = "users"
            }

            return <Icon name={iconName} size={25} color={color} />;
          },
        })
        }
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "rgb(72,102,226)",
        }}
      >
      <Tab.Screen
        name="SpendAddPage"
        component={SpendAdd}
      />
      <Tab.Screen
        name="BottomNavigator"
        component={BottomNavigator}
      />
      <Tab.Screen
        name="GroupAddPage"
        component={GroupAdd}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Router