import React from 'react'
import { Card, Button, Text, Item, Input, Label } from 'native-base';
import { View, TouchableOpacity, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import styles from '../../styles/home/homeStyles'



const OptionsListItem = ({ item, onSelect }) => {

    return (
        <TouchableNativeFeedback onPress={onSelect}>
            <Card
                style={[styles.categoryCard, styles.linearGradient, {
                    backgroundColor: item.color,
                    width: item.size == 1 ? wp('96%') : item.size == 2 ? wp('38%') : wp('58%'),
                    height: 120//item.size == '3' ? hp('10%') : item.size == '2' ? hp('21%') : hp('20%')
                }]}>
                <Text style={styles.itemName}>{item.company}</Text>
                {/* <Image resizeMode="contain"
                    style={[styles.logo, {
                        marginTop: item.size == '3' ? hp('-3%') : wp('0%'),
                        width: wp('18%') * (1 / item.size),
                        height: wp('18%') * (1 / item.size),
                    }]}
                    source={{ uri: item.picture }}
                // defaultSource={require('../../assets/images/default.png')} 
                /> */}
            </Card>
        </TouchableNativeFeedback>
    );
}

export default OptionsListItem;
