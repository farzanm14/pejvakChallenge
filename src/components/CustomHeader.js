import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

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