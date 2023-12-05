//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import HeaderComp from '../../components/HeaderComp';
import strings from '../../constants/lang';
import FastImageComp from '../../components/FastImageComp';
import imagePath from '../../constants/imagePath';
import TextInputComp from '../../components/TextInputComp';
import {moderateScale, moderateScaleVertical} from '../../styles/responsiveSize';
import MultiTextInput from '../../components/MultiTextInput';
import ButtonComp from '../../components/ButtonComp';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';
import ModalComp from '../../components/ModalComp';
import { isDraft } from '@reduxjs/toolkit';
import navigationStrings from '../../Navigations/navigationStrings';

// create a component
const ProfileEdit = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [userBio, setUserBio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showExternalLinks, setShowExternalLinks] = useState(false);


  const  {selectedTheme} = useSelector(state => state?.appSettings);



  const onSave = () => {
    alert('data will be save');
  };

  return (
    <WrapperContainer>
      <View style={{padding: moderateScale(16)}}>
        <HeaderComp
          leftText={strings.EDIT_PROFILE}
          rightText={strings.SAVE}
          onPressRight={onSave}
        />

        <TouchableOpacity style={{alignSelf: 'center', position: 'relative'}}>
          <FastImageComp
            uri="https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-dark-jacket_662214-102003.jpg"
            imageStyle={{borderRadius: 50}}
          />
          <Image
            source={imagePath.icEdit}
            style={{position: 'absolute', bottom: 0, right: 10}}
          />
        </TouchableOpacity>

        <View style={{marginTop: moderateScale(24)}}>
          <TextInputComp
            value={userName}
            placeholder={strings.USERNAME}
            onChangeText={value => setUserName(value)}
          />

          <TextInputComp
            value={fullName}
            placeholder={strings.FULL_NAME}
            onChangeText={value => setFullName(value)}
          />

          <MultiTextInput
            value={userBio}
            placeholder={strings.FULL_NAME}
            onChangeText={value => setUserBio(value)}
            multiline={true}
          />
        </View>
        <ButtonComp
          text={strings.CHANGE_PASSWORD}
         onPress={()=>setShowModal(true)}
          style={{
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor:selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor,
            
          }}
        />

        <ButtonComp
          text={strings.ADD_LINKS}
          onPress={()=>navigation.navigate(navigationStrings.LINKS)}
          style={{
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor:selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor,
            marginTop:moderateScaleVertical(16)
          }}
        />
        <ModalComp
        key={'1'}
        isVisible={showModal}
        style={{margin:0,justifyContent:'flex-end' }}
        avoidKeyboard
        onBackdropPress={()=>setShowModal(false)}
       
         >
          <View style={{...styles.modalStyle, backgroundColor:selectedTheme == 'dark' ? colors.whiteColorOpacity20 : colors.blackOpacity20}}>
          <TextInputComp
            value={password}
            placeholder={strings.ENTER_OLD_PASSWORD}
            onChangeText={value => setPassword(value)}
            secureTextEntry={secureText}
            secureText={secureText ? strings.SHOW : strings.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
          />

          <TextInputComp
            value={confirmPassword}
            placeholder={strings.CONFIRM_PASSWORD}
            onChangeText={value => setConfirmPassword(value)}
            secureTextEntry={secureText}
            secureText={secureText ? strings.SHOW : strings.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
          />

            <ButtonComp
            text={strings.CHANGE_PASSWORD}
            />
          </View>
       
        </ModalComp>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({

  modalStyle:{
    padding:moderateScale(16),
    backgroundColor:colors.gray3,
    borderTopLeftRadius:moderateScale(16),
    borderTopRightRadius:moderateScale(16),
  }
});

//make this component available to the app
export default ProfileEdit;
