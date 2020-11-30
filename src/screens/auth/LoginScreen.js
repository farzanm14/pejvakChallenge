import * as React from 'react';
import { Button, Text, View, Icon, Input, Item, Container } from 'native-base';
import { Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles/auth/loginStyles'
import PatternBackground from '../../components/PatternBackground'
import CustomInput from '../../components/CustomInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function LoginScreen({ navigation }) {
  const [phone, setPhone] = React.useState('')


  return (
    <KeyboardAwareScrollView>
      <PatternBackground>
        <SafeAreaView style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.introText}>برای ورود شماره تماس خود را وارد نمایید</Text>
            <CustomInput length={10} callBack={val => alert(val)} hintText='+۹۸' style={styles.input} />
            <Button block full iconLeft onPress={() => { navigation.navigate('DrawerNavigation'); }} style={styles.button}>
              <Icon type="MaterialIcons" name="keyboard-arrow-left" />
              <Text>ورود</Text>
            </Button>
          </View>
        </SafeAreaView>
      </PatternBackground>
    </KeyboardAwareScrollView>
  );
}
export default LoginScreen;