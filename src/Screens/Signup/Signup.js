//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import TextInputComp from '../../components/TextInputComp';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import HeaderComp from '../../components/HeaderComp';
import TextComp from '../../components/TextComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import navigationStrings from '../../Navigations/navigationStrings';

// create a component
const Signup = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [emial, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  function signUp(){
       navigation.navigate(navigationStrings.OTP_VERIFICATION)
  }
  
  return (
    <WrapperContainer>
      <HeaderComp />
      <KeyboardAwareScrollView>

      <View style={{ padding: moderateScale(16)}}>
        <View>
          <TextComp text={strings.WELCOME_BACK} style={styles.headerStyle}/>
          <TextComp text={strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}  style={styles.descStyle}/>

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

          <TextInputComp
            value={emial}
            placeholder={strings.EMAIL}
            onChangeText={value => setEmail(value)}
          />

          <TextInputComp
            value={password}
            placeholder={strings.PASSWORD}
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


        </View>

        <ButtonComp onPress={()=>signUp()} text={strings.SIGN_UP} />
      </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(24),
    fontFamily: fontFamily.medium,
    color: colors.whiteColor,
  },
  descStyle: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.whiteColorOpacity70,
    marginTop: moderateScaleVertical(8),
    marginBottom: moderateScaleVertical(52),
  },
});

//make this component available to the app
export default Signup;
