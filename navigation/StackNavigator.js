import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from '../page/MenuPage';
import HomePage from '../page/HomePage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Menu" component={MenuPage} />
    </Stack.Navigator>
  );
}