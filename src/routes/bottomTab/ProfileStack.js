import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../../screens/profile/ProfileScreen'

const StackHOME = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function ProfileStack() {
  return (
    <StackHOME.Navigator initialRouteName="ProfileScreen">
      <StackHOME.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={navOptionHandler}
      />
    </StackHOME.Navigator>
  );
}

export default ProfileStack;