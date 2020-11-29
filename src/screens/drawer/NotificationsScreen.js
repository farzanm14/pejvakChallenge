import * as React from 'react';
import { Button, View } from 'react-native';

function NotificationsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.goBack()}
          title="Go Back to Tab navegation"
        />
      </View>
    );
  }

  export default NotificationsScreen;