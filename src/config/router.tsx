import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@screens/Home';
import {Login} from '@screens/Login';
import {VideoPlayer} from '@screens/VideoPlayer';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  VideoPayer: {title: string; url: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
