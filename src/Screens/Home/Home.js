//import liraries
import React, {useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';
import FastImageComp from '../../components/FastImageComp';
import imagePath from '../../constants/imagePath';
import TextComp from '../../components/TextComp';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'third item',
  },
];

// create a component
const Home = () => {
  const {selectedTheme} = useSelector(state => state?.appSettings);

  const renderItems = useCallback(({item}) => {
    return (
      <View style={styles.boxStyle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <FastImageComp
              uri="https://www.shutterstock.com/shutterstock/photos/2320286455/display_1500/stock-vector-young-man-anime-style-character-vector-illustration-design-face-young-man-anime-style-character-2320286455.jpg"
              imageStyle={styles.profileImage}
            />

            <View>
              <TextComp text="anish" style={styles.nameStyle} />
              <TextComp
                text="bhilwara raj"
                style={{
                  ...styles.bioStyle,
                  color:
                    selectedTheme == 'dark'
                      ? colors.whiteColorOpacity40
                      : colors.blackOpacity70,
                }}
              />
            </View>
          </View>
          <TouchableOpacity 
          activeOpacity={0.7}
          >
          <Image source={imagePath.icDots} />
          </TouchableOpacity>
        </View>

        <FastImageComp
          uri="https://www.shutterstock.com/shutterstock/photos/2320241203/display_1500/stock-vector-young-man-anime-style-character-vector-illustration-design-face-young-man-anime-style-character-2320241203.jpg"
          imageStyle={styles.postImage}
        />

        <TextComp text="anish sahrma dslfks" />
        <TextComp
          text="1hr"
          style={{
            ...styles.desStyle,
            marginTop: moderateScaleVertical(14),
            color:
              selectedTheme == 'dark'
                ? colors.whiteColorOpacity70
                : colors.blackOpacity70,
          }}
        />

        <View style={styles.flexHorizontal}>
          <View style={{flexDirection: 'row'}}>
            <TextComp
              text={`comments ${20}`}
              style={{...styles.desStyle, marginRight: moderateScale(4)}}
            />
            <TextComp text={`Likes ${20}`} />
          </View>
          <TouchableOpacity
          activeOpacity={0.7}
          >
              <Image source={imagePath.icShare }/>
            </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  return (
    <WrapperContainer style={styles.container}>
      <View style={{flex: 1, padding: moderateScale(8)}}>
        <FlatList
          data={DATA}
          renderItem={renderItems}
          ItemSeparatorComponent={() => (
            <View style={{height: moderateScale(20)}}></View>
          )}
        />
      </View>
    </WrapperContainer>
  );
};

// define your styles

//make this component available to the app
export default Home;
