import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Feather';
import {Icon} from 'native-base'
import {StyleSheet} from 'react-native'
import HistoryStack from './bottomTab/HistoryStack';
import HomeStack from './bottomTab/HomeStack';
import ProfileStack from './bottomTab/ProfileStack';
import ScanStack from './bottomTab/ScanStack';
import WalletStack from './bottomTab/WalletStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='home'>
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" style={styles.icon} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="wallet"
        component={WalletStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" style={styles.icon} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="scan"
        component={ScanStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="scan" style={styles.icon} size={size} />
          ),
        }}
      />



      <Tab.Screen
        name="history"
        component={HistoryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" type='MaterialIcons' style={styles.icon} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" style={styles.icon} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

const styles=StyleSheet.create({
  icon:{
    color:'#33adff'
  }
})