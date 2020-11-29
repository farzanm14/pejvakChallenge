import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home'
import HomeDetail from '../../screens/home/HomeDetail'

const StackHOME = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function HomeStack() {
  return (
    <StackHOME.Navigator initialRouteName="Home">
      <StackHOME.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}
      />
      <StackHOME.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={navOptionHandler}
      />
    </StackHOME.Navigator>
  );
}

export default HomeStack;