import * as React from 'react';
import { Button, Text, View } from 'react-native';

function LoginScreen({navigation}) {
    return (
      <View style={{flex: 1,justifyContent:'center'}}>
    
        <Button
          onPress={() => {
            navigation.navigate('DrawerNavigation');
          }}
          title="Login Now"
        />
       
  
        <Button
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
          title="Register"
        />
      </View>
    );
  }
export default LoginScreen;