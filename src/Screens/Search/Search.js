//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import FastImage from 'react-native-fast-image';
import FastImageComp from '../../components/FastImageComp';
import { height, moderateScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import SearchBar from '../../components/SearchBar';

const DATA=[
    { }, { }, {},{},{}
]


// create a component
const Search = () => {
    const renderItem=({item,index})=>{

        return(
            <TouchableOpacity
            style={{marginTop:index % 2 == 0 ? moderateScale(16) : 0, margin:5}}
           
             >
              
                <FastImageComp
                uri='https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-dark-jacket_662214-102003.jpg'
                imageStyle={{
                    width:width/2,
                    height:width/2,
                    borderWidth:2,
                    borderColor:colors.whiteColor,
                   
                }}
                
                />  
            </TouchableOpacity>
        )

    }
    return (
      <WrapperContainer>
        <View style={{flex:1,alignItems:'center'}}>
            <SearchBar
            placeholder='search...'
            inputStyle={{marginHorizontal:moderateScale(8)}}
          
            
            />

            <FlatList
           numColumns={2}
            data={DATA}
            renderItem={renderItem}
            />
        </View>

      </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Search;
