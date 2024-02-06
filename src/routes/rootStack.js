import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Post from '../components/Post';
import Get from '../components/Get';
import Detail from '../components/Detail';
import {Image} from 'react-native';

const rootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="Get" component={Get} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default rootStack;
