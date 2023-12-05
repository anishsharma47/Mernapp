import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { height, moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";
import fontFamily from "../../styles/fontFamily";

const styles = StyleSheet.create({
   boxStyle:{
    backgroundColor:colors.gray2,
    borderRadius:moderateScale(8),
    padding:moderateScale(12),
   },
   profileImage:{
      width:moderateScale(60),
      height:moderateScale(60),
      borderRadius:moderateScale(30),
      marginRight:moderateScale(16)
   },
   nameStyle:{
      fontSize:textScale(16),
      fontFamily:fontFamily.medium,
      color: colors.whiteColor, 

   },
   bioStyle:{
      fontSize:textScale(12),
      fontFamily:fontFamily.medium,
      color: colors.whiteColorOpacity50, 
      marginVertical:moderateScaleVertical(4)

   },
   postImage:{
        width:'100%',
        height:height/2,
        borderRadius:moderateScale(30),
        marginVertical:moderateScaleVertical(16)
   },
   desStyle:{
      fontSize:textScale(14),
      fontFamily:fontFamily.regular
   },
   flexHorizontal:{
      flexDirection:'row',
      justifyContent:'space-between'
   }
  });

  export default styles;