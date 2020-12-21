import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/Ionicons';

import { SpendAdd, GroupAdd } from "./pages";
import  { PayScreenComponent }  from "./components"


const Tab = createBottomTabNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SpendAdd"
        tabBarOptions={{
          activeTintColor:"rgb(47,82,224)",
          inactiveTintColor:"#0091EA",
          showLabel:false,
        }}
      >
          
        <Tab.Screen
          name="SpendAdd"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon
                name="user"
                color={color}
                size={26}
              />
            )
          }}
          component={SpendAdd}
        />

        <Tab.Screen
          name="Add"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <TouchableOpacity 
              style={{
                width:Dimensions.get("window").width / 5,
                alignItems:"center",
                justifyContent:"center"
              }}
                onPress={() =>{}}
              >
                <Iconn
                  name="add-circle"
                  color='#0091EA'
                  size={68}
                  style={{bottom:25}}
                /> 
              </TouchableOpacity>
            )
          }}
          component={PayScreenComponent}
        />

        <Tab.Screen
          name="GroupAdd"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="users"
                color={color}
                size={26}
              />
            )
          }}
          component={GroupAdd}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router