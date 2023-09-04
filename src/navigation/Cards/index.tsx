import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Posts} from '../../screens/Posts';
import {Cards} from '../../screens/Cards';

const CardsStack = createNativeStackNavigator();

export const CardsNav = () => {
  return (
    <CardsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'AllCards'}>
      <CardsStack.Screen name="AllCards" component={Cards} />
    </CardsStack.Navigator>
  );
};
