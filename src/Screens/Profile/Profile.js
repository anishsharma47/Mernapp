//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import FastImageComp from '../../components/FastImageComp';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';
import TextComp from '../../components/TextComp';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../Navigations/navigationStrings';

// create a component
const Profile = ({navigation}) => {
  const {selectedTheme} = useSelector(state => state?.appSettings);

  const ListHeader = () => {
    return (
    <View  style={{marginBottom:moderateScale(16)}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FastImageComp
            uri="https://www.shutterstock.com/shutterstock/photos/2240084865/display_1500/stock-vector-young-man-anime-style-character-vector-illustration-design-manga-anime-boy-black-hair-faces-2240084865.jpg"
            imageStyle={{
              borderRadius: moderateScale(50),
            }}
          />
          <View style={{marginLeft: moderateScale(16)}}>
            <TextComp
              text="Anish Sharma"
              style={{
                fontSize: textScale(20),
              }}
            />

            <TextComp
              text="anishsdshara@gmail.com"
              style={{
                fontSize: textScale(14),
                color:
                  selectedTheme == 'dark'
                    ? colors.whiteColorOpacity70
                    : colors.blackOpacity70,
              }}
            />
          </View>
          </View>
         <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.PORFILE_EDIT)}>
          <Image source={imagePath.icEdit}/>
         </TouchableOpacity>
        </View>

        <View style={{marginVertical: moderateScaleVertical(16)}}>
          <TextComp
            text='Passionate front-end developer with a flairve "'
            style={{fontSize: textScale(16)}}
          />
        </View>

        <View style={styles.boxView}>
          <TextComp
            text='DasBoard"'
            style={{
              fontSize: textScale(14),
              color:
                selectedTheme == 'dark'
                  ? colors.whiteColorOpacity70
                  : colors.blackOpacity70,
            }}
          />

          <TextComp
            text='Account reached in the last"'
            style={{fontSize: textScale(14)}}
          />
        </View>
        </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <FastImageComp
          uri="https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-dark-jacket_662214-102003.jpg"
          imageStyle={{
            ...styles.imageStyle,
            borderColor:
              selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
      <View style={{padding: moderateScale(10),}}>
        <FlatList
          numColumns={3}
          data={[
            {}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
          ]}
          renderItem={renderItem}
          ListHeaderComponent={<ListHeader />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text>no data found</Text>}
          keyExtractor={(item, index) => item?.id || String(index)}
        />
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  boxView: {
    backgroundColor: colors.gray2,
    padding: moderateScale(16),
    borderRadius: moderateScale(8),
  },
  imageStyle: {
    width: width / 3,
    height: width / 3,
  },
});

//make this component available to the app
export default Profile;
