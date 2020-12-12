import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/Ionicons';


import { SpendAdd, GroupAdd } from "./pages";
import { PayScreenComponent } from "./components"


const Tab = createBottomTabNavigator();

const customTabBarStyle = {
	activeTintColor: '#0091EA',
	inactiveTintColor: 'rgb(47,82,224)',
	style: {backgroundColor: 'white' },
}

const Router = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="GroupAdd"
        activeColor="#fff"
        tabBarOptions={customTabBarStyle}
        shifting="false"
        >
          
        <Tab.Screen
          name="SpendAdd"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={26} />
            )
          }}
          component={SpendAdd}
        />

        <Tab.Screen
          name="PayScreenComponent"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <View
                style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
              <Iconn name="add-circle" color="rgb(47,82,224)" size={68}/>
              </View>
            )
          }}
          component={PayScreenComponent}
        />

        <Tab.Screen
          name="GroupAdd"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name="users" color={color} size={26} />
            )
          }}
          component={GroupAdd}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router