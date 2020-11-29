import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import DrawerNavigation from './DrawerNavigation';


const STACKLOGIN = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
  });
  

// Login Stack Navigation
function AuthStack() {
    return (
      <STACKLOGIN.Navigator initialRouteName="Login">
        <STACKLOGIN.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <STACKLOGIN.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={navOptionHandler}
        />
        <STACKLOGIN.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={navOptionHandler}
        />
      </STACKLOGIN.Navigator>
    );
  }

  export default AuthStack;