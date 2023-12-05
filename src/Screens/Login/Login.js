//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet ,  Platform,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import TextInputComp from '../../components/TextInputComp';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import HeaderComp from '../../components/HeaderComp';
import TextComp from '../../components/TextComp';
import { showError } from '../../utils/helperFunctions';
import validator  from '../../utils/vailidations'

// create a component
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [secureText,setSecureText]=useState(true);

    const isValidData=()=>{
      const error = validator({ email, password})
      if (error) {
       showError(error)
       return false 
      }
      return true

    }

    function onLogin(){
      const isval=isValidData();
      alert(isval)
    
    }
    return (
      <WrapperContainer>
        <HeaderComp/>
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>

     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


        <View style={{flex:1,padding:moderateScale(16)}}>

      
        <View style={{flex:1}}>
         <TextComp text={strings.WELCOME_BACK} style={styles.headerStyle}/>
         <TextComp text={strings.WE_ARE_HAPPY_TO_SEE} style={styles.descStyle}/>

         <TextInputComp 
         value={email}
         placeholder={strings.EMAIL}
         onChangeText={(value) => setEmail(value)}
         />

         <TextInputComp 
         value={password}
         placeholder={strings.PASSWORD}
         onChangeText={(value) => setPassword(value)}
         secureTextEntry={secureText}
         secureText ={secureText ? strings.SHOW : strings.HIDE}
         onPressSecure={()=>setSecureText(!secureText)}
         />

      
         
            <Text style={{
                ...styles.descStyle,
                alignSelf:'flex-end',
                color:colors.blueColor,
                }} >{strings.FORGOT_PASSWORD}</Text>
    
        </View>

        <ButtonComp
        text={strings.LOGIN}
        style={{marginBottom:moderateScale(24)}}
        onPress={()=>onLogin()}
        />
       

        </View>

        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle:{
        fontSize:textScale(24),
        fontFamily:fontFamily.medium,
        color:colors.whiteColor
    },
    descStyle:{
        fontSize:textScale(12),
        fontFamily:fontFamily.regular,
        color:colors.whiteColorOpacity70,
        marginTop:moderateScaleVertical(8),
        marginBottom:moderateScaleVertical(52)
    }
});

//make this component available to the app
export default Login;
