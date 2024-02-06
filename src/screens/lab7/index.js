import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './HomeScreen';
import User from './UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
const Tab = createBottomTabNavigator();
const Lab7 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({forcused}) => {
              return (
                <View>
                  <Image
                    source={require('../../assets/icons/home.png')}
                    resizeMode="contain"
                    style={{width: 25}}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({forcused}) => {
              return (
                <View>
                  <Image
                    source={require('../../assets/icons/user.png')}
                    resizeMode="contain"
                    style={{width: 25}}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Lab7;
