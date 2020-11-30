import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

export default StyleSheet.create({
    optionsListContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryCard: {
        // backgroundColor: colors.light_gray_pattern,
        borderRadius: wp('4%'),
        // width: wp('18%'),
        // height: wp('30%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('5%'),
        marginVertical:hp('2%')
    },

    itemName: {
        fontSize: wp('4%'),
        color: 'gray',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
})