import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        props={{title: 'profile Stack', isHome: true, navigation: navigation}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;