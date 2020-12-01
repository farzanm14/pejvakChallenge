import { Text, View } from 'native-base';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import PatternBackground from '../../components/PatternBackground';
import styles from '../../styles/auth/loginStyles';

function LoginScreen({ navigation }) {
  const [phone, setPhone] = React.useState('')

  return (
    <KeyboardAwareScrollView>
      <PatternBackground>
        <SafeAreaView style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.introText}>برای ورود شماره تماس خود را وارد نمایید</Text>
            
            <CustomInput
              length={10}
              callBack={val => alert(val)}
              hintText='+۹۸'
              style={styles.input} />
            
            <CustomButton
              text='ورود'
              icon='keyboard-arrow-left'
              onPress={() => navigation.navigate('VerifyPhoneScreen')}
            />
          </View>
        </SafeAreaView>
      </PatternBackground>
    </KeyboardAwareScrollView>
  );
}

export default LoginScreen;