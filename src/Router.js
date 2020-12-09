import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import RootNavigation from './RootNavigation';

// Screens
import SignInScreen from './screens/SignInScreen';
import SignupScreen from './screens/SignUpScreen';
import EntryScreen from './screens/EntryScreen';
import HomeScreen from './screens/HomeScreen';

// Navigation fonksiyonlarının açılması.

const StackScreens = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer ref={RootNavigation}>
      <StackScreens.Navigator initialRouteName="Entry">
        <StackScreens.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <StackScreens.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }} />
        <StackScreens.Screen
          name="Entry"
          component={EntryScreen}
          options={{ headerShown: false }}
        />
        <StackScreens.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </StackScreens.Navigator>
    </NavigationContainer>
  );
};
export default Router;
