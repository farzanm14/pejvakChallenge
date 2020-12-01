import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center', flex: 1
    },
    formContainer: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 70,
        height: 200,
        width:wp('80%')


    },
    introText: {

    },
    input: {
        
    },
    verifyInput: {
        paddingHorizontal:30
    },
   
    resendContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-around',
        width:'100%'
    },
    remainText:{
        color:'gray',
        fontSize:14,
    },
    resendBtnText:{
        color:'blue',
        fontSize:14
    }
})