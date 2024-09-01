import React from 'react';
import Home from './src/Home';
import StoreLocation from './src/StoreLocation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderComponent from './src/HeaderComponent';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HeaderComponent />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="StoreLocation"
          component={StoreLocation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
