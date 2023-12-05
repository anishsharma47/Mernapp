//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

// create a component
const FastImageComp = ({
    uri='',
    imageStyle={}
}) => {
    return (
        <FastImage
        style={{...styles.imageStyle,...imageStyle }}
        source={{
            uri: uri,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
    />
    );
};

// define your styles
const styles = StyleSheet.create({
  
    imageStyle:{
        width:100,
        height:100,
        
    }
});

//make this component available to the app
export default FastImageComp;
