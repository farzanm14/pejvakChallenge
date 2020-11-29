import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';

function HistoryScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        props={{title: 'History Stack', isHome: true, navigation: navigation}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HistoryScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HistoryScreen;