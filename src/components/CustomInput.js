import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, View, Icon, Input, Item, Container } from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const CustomInput = ({ length, callBack, hintText }) => {
    const [value, setValue] = React.useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.hintStyle}>{hintText}</Text>
            <OTPInputView
                style={styles.theInput}
                pinCount={length}
                code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => setValue(code)}
                autoFocusOnLoad
                editable
                selectionColor='black'
                keyboardAppearance='dark'
                keyboardType='number-pad'
                placeholderTextColor='gray'
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => callBack(code)}
            />
        </View>
    )
}

export default CustomInput;


const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: 45
    },
    hintStyle: {
        color: 'gray',
        alignSelf: 'center'
    },
    underlineStyleBase: {
        width: 14,
        height: 20,
        color:'black',
        borderColor: "gray",
        fontFamily:'IRANSansWeb(FaNum)',
        // backgroundColor:'green',
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "gray",
    },
    theInput: {
        flexDirection: 'row',
        alignSelf: 'center',
        color: 'gray',
        fontSize: 20,
        marginHorizontal: 10,
        height: 10,
    }
});