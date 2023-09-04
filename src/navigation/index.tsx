import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsNav } from './Posts';
import { CardsNav } from './Cards';
import { useLocation } from '../hooks/useLocation';

const BottomTab = createBottomTabNavigator();

export const NavContainer = () => {
  useLocation();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Posts'}>
        <BottomTab.Screen name="Posts" component={PostsNav} />
        <BottomTab.Screen name="Cards" component={CardsNav} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
