import * as React from 'react';
import { Button, Text, View, Icon, Input, Item, Container } from 'native-base';
import { Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles/auth/loginStyles'
import PatternBackground from '../../components/PatternBackground'
import CustomInput from '../../components/CustomInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function VerifyPhoneScreen({ navigation }) {
    const [time, setTime] = React.useState(120)

    // setInterval(() => {
    //     setTime(time - 1)
    // }, 1000);

    return (
        <KeyboardAwareScrollView>
            <PatternBackground>
                <SafeAreaView style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.introText}>برای ورود شماره تماس خود را وارد نمایید</Text>
                        <CustomInput length={6} callBack={val => alert(val)} hintText='' style={styles.input} />
                        <View style={styles.resendContainer}>
                            <Button small transparent>
                                <Text>ارسال مجدد</Text>
                            </Button>
                            <Text style={styles.remainText}>{`زمان باقی مانده`}{ ` 1:50`}</Text>
                        </View>
                        <Button block full iconLeft onPress={() => { navigation.navigate('DrawerNavigation'); }} style={styles.button}>
                            <Icon type="MaterialIcons" name="keyboard-arrow-left" />
                            <Text>تایید</Text>
                        </Button>
                    </View>
                </SafeAreaView>
            </PatternBackground>
        </KeyboardAwareScrollView>
    );
}
export default VerifyPhoneScreen;