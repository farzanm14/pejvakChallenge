import { Text, View } from 'native-base';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import PatternBackground from '../../components/PatternBackground';
import styles from '../../styles/auth/loginStyles';

function VerifyPhoneScreen({ navigation }) {
    const [timeLeft, setTimeLeft] = React.useState(120000);

    React.useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1000);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);



    return (
        <KeyboardAwareScrollView>
            <PatternBackground>
                <SafeAreaView style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.introText}>برای ورود شماره تماس خود را وارد نمایید</Text>
                        <CustomInput length={6} callBack={val => alert(val)} hintText='' style={styles.verifyInput} />
                        <View style={styles.resendContainer}>

                            <Text onPress={() => setTimeLeft(120000)}
                                style={styles.resendBtnText}>ارسال مجدد</Text>

                            <Text style={styles.remainText}>{` زمان باقی مانده `}
                                {Math.floor((timeLeft / 1000 / 60) % 60)}
                                :
                                {Math.floor((timeLeft / 1000) % 60)}</Text>
                        </View>

                        <CustomButton
                            text='تایید'
                            icon='keyboard-arrow-left'
                            onPress={() => navigation.navigate('DrawerNavigation')}
                        />
                    </View>
                </SafeAreaView>
            </PatternBackground>
        </KeyboardAwareScrollView>
    );
}
export default VerifyPhoneScreen;