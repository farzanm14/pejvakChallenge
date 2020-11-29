import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from '../../screens/scan/ScanScreen'

const StackScan = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
});

function ScanStack() {
    return (
        <StackScan.Navigator initialRouteName="ScanScreen">
            <StackScan.Screen
                name="ScanScreen"
                component={ScanScreen}
                options={navOptionHandler}
            />
        </StackScan.Navigator>
    );
}

export default ScanStack;