//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import HeaderComp from '../../components/HeaderComp';
import strings from '../../constants/lang';
import TextComp from '../../components/TextComp';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import fontFamily from '../../styles/fontFamily';
import ModalComp from '../../components/ModalComp';
import TextInputComp from '../../components/TextInputComp';
import ButtonComp from '../../components/ButtonComp';

// create a component
const Links = () => {
  const {selectedTheme} = useSelector(state => state.appSettings);
  const isDark = selectedTheme == 'dark';
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.itemStyle} activeOpacity={0.7}>
        <View style={{flex: 0.1}}>
          <Image source={imagePath.icLink} />
        </View>
        <View style={{flex: 0.8}}>
          <TextComp
            text="anish@gmail.com"
            numberOfLines={1}
            style={{color: colors.blueColor}}
          />
        </View>
        <View style={{flex: 0.1}}>
          <Image
            style={{tintColor: isDark ? colors.whiteColor : colors.blackColor}}
            source={imagePath.rightArrow}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <View style={{flex: 1, padding: moderateScale(16)}}>
        <HeaderComp leftText={strings.ADD_LINKS} />

        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.addLinksStyle}>
          <Image
            source={imagePath.icAdd}
            style={{marginRight: moderateScale(16)}}
          />

          <TextComp
            text={strings.ADD_LINKS}
            style={{fontSize: textScale(16), fontFamily: fontFamily.medium}}
          />

        </TouchableOpacity>
        <FlatList
          data={[{}, {}]}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: moderateScale(10),
                borderBottomColor: colors.gray2,
                borderBottomWidth: 1,
              }}></View>
          )}
        />

        <ModalComp
          key={'1'}
          isVisible={showModal}
          style={{margin: 0, justifyContent: 'flex-end'}}
          avoidKeyboard
          onBackdropPress={() => setShowModal(false)}>
          <View
            style={{
              ...styles.modalStyle,
              backgroundColor:
                selectedTheme == 'dark'
                  ? colors.whiteColorOpacity20
                  : colors.blackOpacity20,
            }}>
            <TextInputComp
              placeholder={strings.TITLE}
              value={title}
              onChangeText={text => setTitle(text)}
            />

              <TextInputComp
              placeholder={strings.URL}
              value={url}
              onChangeText={text => setUrl(text)}
            />

            <ButtonComp text={strings.SAVE} />
          </View>
        </ModalComp>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(8),
  },
  addLinksStyle: {
    flexDirection: 'row',
    marginVertical: moderateScale(16),
    alignItems: 'center',
  },
  modalStyle: {
    padding: moderateScale(16),
    backgroundColor: colors.gray3,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },
});

//make this component available to the app
export default Links;
