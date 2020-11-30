import * as React from 'react';
import { Header, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';

const CustomHeader = ({ props }) => {

    return (
        <Header transparent style={styles.container}>
            <Icon name="location" />
            <Title style={styles.title}>{props.title}</Title>
            <Icon
                onPress={() => { props.navigation.openDrawer() }}
                name="menu" size={30} color="#000" />
        </Header>
    )

};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        color: 'gray',
        alignItems: 'center'
    }
})