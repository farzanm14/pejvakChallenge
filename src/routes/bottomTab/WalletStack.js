import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WalletScreen from '../../screens/wallet/WalletScreen'

const WalletStack = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
});

function ScanStack() {
    return (
        <WalletStack.Navigator initialRouteName="WalletScreen">
            <WalletStack.Screen
                name="WalletScreen"
                component={WalletScreen}
                options={navOptionHandler}
            />
        </WalletStack.Navigator>
    );
}

export default ScanStack;