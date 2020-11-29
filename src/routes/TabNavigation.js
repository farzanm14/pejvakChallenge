import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import HistoryStack from './bottomTab/HistoryStack';
import HomeStack from './bottomTab/HomeStack';
import ProfileStack from './bottomTab/ProfileStack';
import ScanStack from './bottomTab/ScanStack';
import WalletStack from './bottomTab/WalletStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="wallet"
        component={WalletStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="scan"
        component={ScanStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="scan" color={color} size={size} />
          ),
        }}
      />



      <Tab.Screen
        name="history"
        component={HistoryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="time" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;