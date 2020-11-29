import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const CustomHeader = ({ props }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 50,
            }}>
            <View>
                {
                    // Is Home?
                    props.isHome ? (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.openDrawer();
                            }}>
                            <Icon name="menu" size={30} color="#000" />
                        </TouchableOpacity>
                    ) : (
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.goBack();
                                }}>
                                <Icon name="arrow-left" size={30} color="#000" />
                            </TouchableOpacity>
                        )
                }
            </View>
            <View>
                <Text>{props.title}</Text>
            </View>
        </View>
    );
};

export default CustomHeader;