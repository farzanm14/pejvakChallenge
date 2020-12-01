import * as React from 'react';
import { Header, View,Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

const CustomHeader = ({ props }) => {

    return (
        <View transparent style={styles.container}>
            <Icon
                type='Ionicons'
                color='black'
                
                style={styles.icon}
                name="location-sharp" />
            {/* <Icon name="user" color={color} size={size} /> */}

            <Title style={styles.title}>{props.title}</Title>
            <Icon
                style={styles.icon}
                type='Ionicons'
                onPress={() => { props.navigation.openDrawer() }}
                name="menu" size={30} color="#000" />
        </View>
    )

};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    title: {
        flex: 1,
        color: 'gray',
        textAlign: 'center',
        alignSelf: 'center'
    },
    icon: {
        marginHorizontal: 15
    }
})