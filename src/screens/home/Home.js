import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';


function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        props={{title: 'Home Stack', isHome: true, navigation: navigation}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen! Stack</Text>
        <Button
          title="Go to HomeDetails"
          onPress={() => navigation.navigate('HomeDetail')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;