//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
import fontFamily from '../styles/fontFamily';
import { textScale,moderateScale,moderateScaleVertical } from '../styles/responsiveSize';
// create a component
const  TextComp = ({
    text='',
    style={},
    children,
    ...props
}) => {
    const {selectedTheme}=useSelector(state=>state.appSettings)

   
    return (
    
            <Text style={{
                ...styles.textStyle,
                color:selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor,
                ...style,
            }}> {text}{children}</Text>
     
    );
};

// define your styles
const styles = StyleSheet.create({
  
    textStyle: {
        fontFamily: fontFamily.regular,
        color: colors.whiteColor,
        fontSize:textScale(14)
      },
});

//make this component available to the app
export default TextComp ;
