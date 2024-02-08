import {NavigationContainer} from '@react-navigation/native';

import ListUser from './listUser';
import AddUser from './addUser';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Lab81 = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListUser" component={ListUser} />
        <Stack.Screen name="AddUser" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab81;
