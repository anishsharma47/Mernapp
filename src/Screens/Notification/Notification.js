//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import HeaderComp from '../../components/HeaderComp';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import FastImage from 'react-native-fast-image';
import FastImageComp from '../../components/FastImageComp';
import TextComp from '../../components/TextComp';
import colors from '../../styles/colors';
import { useSelector } from 'react-redux';
import strings from '../../constants/lang';

// create a component
const Notification = () => {
    const {selectedTheme}=useSelector(state=>state?.appSettings)
  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <FastImageComp
            uri="https://img.freepik.com/premium-photo/unveiling-enigmatic-charm-anime-boy-fascinating-world-animation-character-desig_974154-67.jpg"
            imageStyle={{
              width: moderateScale(60),
              height: moderateScale(60),
              borderRadius: moderateScale(30),
            }}
          />

          <View style={{marginHorizontal:moderateScale(10),borderBottomColor:'red', borderBottomWidth:1,width:'100%'}}>

            <TextComp text="user name" style={{fontSize: textScale(16)}}>
              <Text style={{color:colors.redColor}}>Added new</Text>
            </TextComp>

            <TextComp text="1hr" />

          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <View
        style={{
          flex: 1, 
          paddingHorizontal: moderateScale(16),
        }}>
        <HeaderComp
          leftText={strings.NOTIFICATION}
          isLeftImage={false}
          style={{paddingHorizontal: 0}}
        />
        <FlatList
          data={[{}, {}, {}]}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <View style={{height: moderateScale(20)}}></View>
          )}
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
export default Notification;
