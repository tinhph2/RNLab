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
import Lab81 from './src/screens/lab8/lab81';
import Lab82 from './src/screens/lab8/lab82';
import AddUser from './src/screens/lab8/addUser';
// import Lab7 from './src/screens/lab7';
// const Stack = createNativeStackNavigator();
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
    <Lab82></Lab82>

    // <TopTab></TopTab>
  );
};

export default App;
