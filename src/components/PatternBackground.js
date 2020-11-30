import React from 'react';
import { ImageBackground, StyleSheet, Image, View, SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg'
import { logo } from '../assets/svg'
import { Text }  from 'native-base'

const PatternBackground = props => {
    return (
        <View>
            <ImageBackground style={styles.imageStyle} source={require('../assets/images/background.png')}>
                {/* <Image resizeMode="contain" style={styles.logoStyle} source={require('../assets/images/bazartiLogo.png')} />                 */}
                <SvgXml style={styles.logoStyle} width={100} height={100} fill='black' xml={logo} />
                <Text style={styles.title}>نرم افزار خدمات استانی فارس</Text>
                {props.children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'repeat',
        width: wp('100%'),
        height: hp('100%'),
        padding: wp('2%'),
        // opacity: 0.6,
    }, logoStyle: {
        alignSelf: 'center', marginTop: hp('10%')
    }, title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 20
    }
});
export default PatternBackground;
