import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';

function HomeDetail({navigation}) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          props={{
            title: 'HomeDetail Stack',
            isHome: false,
            navigation: navigation,
          }}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>HomeDetail Screen! Stack</Text>
        </View>
      </SafeAreaView>
    );
  }

  export default HomeDetail;