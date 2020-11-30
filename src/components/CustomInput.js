import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, View, Icon, Input, Item, Container } from 'native-base';

const CustomInput = ({ length, callBack, hintText }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.hintStyle}>{hintText}</Text>
            <Input 
                maxLength={length}
                style={{}}
                keyboardType='phone-pad'
                value={'phone'}
                // onChangeText={(phone) => setPhone(phone)}
            />
        </View>
    )
}

export default CustomInput


const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal:5
    },
    hintStyle: {
        color: 'gray',
        alignSelf: 'center'
    }
})