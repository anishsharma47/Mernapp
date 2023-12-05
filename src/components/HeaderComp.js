//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {moderateScale, textScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import colors from '../styles/colors';
import TextComp from './TextComp';
import fontFamily from '../styles/fontFamily';

// create a component
const HeaderComp = ({
  onPressLeft,
  onPressRight,
  leftText = '',
  isLeftImage = true,
  style = {},
  rightText='',
  
}) => {
  const navigation = useNavigation();
  const {selectedTheme} = useSelector(state => state.appSettings);

  return (
    <View style={{...styles.container, ...style}}>
      {!!isLeftImage ? (
        <TouchableOpacity
          onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}
          style={{marginRight:moderateScale(16)}}
           >
          <Image
            style={{
              tintColor:
                selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor,
            }}
            source={imagePath.icBack}
          />
        </TouchableOpacity>
      ) : null}

      {!!leftText ? (
        <TextComp style={styles.textStyle} text={leftText} />
      ) : null}
         
      {!!rightText ? (    <TouchableOpacity activeOpacity={0.7} onPress={onPressRight}>
      <TextComp style={{...styles.rightTextStyle,...style}}  >{rightText}</TextComp>
        </TouchableOpacity>   ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: moderateScale(42),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),

  
  },
  textStyle: {
    fontSize: textScale(16),
    fontFamily: fontFamily.medium,
    flex:1
  },
  rightTextStyle:{
   fontSize:textScale(16),
   fontFamily:fontFamily.medium
  }
});

//make this component available to the app
export default HeaderComp;
