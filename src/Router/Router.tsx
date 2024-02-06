import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Details from '../Screen/Details';
import Search from '../Screen/Search';
export type AppStakc = {
  Home: undefined;
  Search: undefined;
  Details: any;
};
const Stack = createNativeStackNavigator<AppStakc>();
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'GetJob',
        headerTitleAlign: 'center',
        // headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default Router;
