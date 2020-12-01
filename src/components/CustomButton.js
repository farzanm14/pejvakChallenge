import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, Button, Icon } from 'native-base'

const CustomButton = ({ icon, text, style, onPress }) => {
    return (
        <Button block full iconLeft onPress={onPress} style={[styles.button, style]}>
            <Icon style={styles.icon} type="MaterialIcons" name={icon} />
            <Text style={styles.text}>{text}</Text>
        </Button>
    )
}

export default CustomButton;


const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
    },
    icon: {
        flex: 1,
    },
    text: {
        flex: 8,
        textAlign: 'center'
    },
})