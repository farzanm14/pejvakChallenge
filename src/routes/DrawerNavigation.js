import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigation'
import NotificationsScreen from '../screens/drawer/NotificationsScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import { Button } from 'native-base';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('TabNavigator');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            marginHorizontal: 10,
          }}>
          <Icon name="home" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Tab Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Notifications');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            marginHorizontal: 10,
          }}>
          <Icon name="bell" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Notifications Screen</Text>
        </TouchableOpacity>
        {/* <Button onPress={() => props.navigation.navigate('LoginScreen')}
        ><Text>logout</Text></Button> */}
      </ScrollView>
    </SafeAreaView>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      drawerPosition='right'
      drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="logout" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;