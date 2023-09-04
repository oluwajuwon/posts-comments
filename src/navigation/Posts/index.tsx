import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Posts} from '../../screens/Posts';
import {Post} from '../../screens/Post';

const PostsStack = createNativeStackNavigator();

export const PostsNav = () => {
  return (
    <PostsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'AllPosts'}>
      <PostsStack.Screen name="AllPosts" component={Posts} />
      <PostsStack.Screen name="Post" component={Post} />
    </PostsStack.Navigator>
  );
};
