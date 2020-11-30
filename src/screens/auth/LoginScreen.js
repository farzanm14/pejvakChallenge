import * as React from 'react';
import { Button, Text, View, Icon, Input, Item, Container } from 'native-base';
import { Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles/auth/loginStyles'
import PatternBackground from '../../components/PatternBackground'
import CustomInput from '../../components/CustomInput'

function LoginScreen({ navigation }) {
  const [phone, setPhone] = React.useState('')


  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <PatternBackground>
        <SafeAreaView style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.introText}>برای ورود شماره تماس خود را وارد نمایید</Text>
            <CustomInput length={11} callBack={val=>alert(val)} hintText='+۹۸' style={styles.input}/>
            <Button block full iconLeft  onPress={() => { navigation.navigate('DrawerNavigation'); }} style={styles.button}>
              <Icon type="MaterialIcons" name="keyboard-arrow-left" />
              <Text>ورود</Text>
            </Button>
          </View>
        </SafeAreaView>
      </PatternBackground>
    </KeyboardAvoidingView>
  );
}
export default LoginScreen;