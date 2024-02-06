import React from 'react';

import Splash from './src/screens/auth/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigUp from './src/screens/auth/SignUp';
import SigIn from './src/screens/auth/SignIn';
import Lab4 from './src/screens/lab4';
import {SafeAreaView, ScrollViewComponent} from 'react-native';
import ViewComponent from './src/screens/lab3';
import Scroll from './src/components/scroll';
import TopTab from './src/screens/lab7/topmenu';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <SafeAreaView>
    //   <DemoScrollView />
    // </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Splash} />
    //     <Stack.Screen name="SignIn" component={SigIn} />
    //     <Stack.Screen name="SignUp" component={SigUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Scroll></Scroll>
    // <Lab7></Lab7>
    <TopTab></TopTab>
  );
};

export default App;
