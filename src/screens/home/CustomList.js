import React from 'react'
import { View, Text } from 'native-base'
import { ScrollView, } from 'react-native'
import OptionsListItem from './OptionsListItem'
import  styles  from '../../styles/home/homeStyles'

const CustomList = ({ list }) => {
    return (
        <ScrollView style={{flex:1}}>
            <View style={[styles.optionsListContainer,]}>
                {list.length == 0 ?
                    <View><Text>هنوز موردی ثبت نشده</Text></View>
                    : list.map((item, index) => { return <OptionsListItem item={item} /> })
                }
            </View>
        </ScrollView>
    )
}

export default CustomList;
