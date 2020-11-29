import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HistoryScreen from '../../screens/history/HistoryScreen'

const StackHOME = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function HistoryStack() {
  return (
    <StackHOME.Navigator initialRouteName="HistoryScreen">
      <StackHOME.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={navOptionHandler}
      />
    </StackHOME.Navigator>
  );
}

export default HistoryStack;