//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
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
import OTPTextView from 'react-native-otp-textinput';

// create a component
const OtpVerification= () => {
    const [emial,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [secureText,setSecureText]=useState(true);
    const [otpInput, setOtpInput] = useState("");
    const [timer,setTimer]=useState(59)
    const input=useRef(null)

    useEffect(()=>{
        const timerCount=setInterval(() => {

            if (timer > 0) {          
                setTimer(timer - 1)
            }
   
        }, 1000);

        return ()=>{

            if (timerCount) {
               
                clearInterval(timerCount)
            }
        }
      
    
    },[timer])

    const handleCellTextChange = async (text, i) => {
        if (i === 0) {
          const clippedText = await Clipboard.getString();
          if (clippedText.slice(0, 1) === text) {
            input.current?.setValue(clippedText, true);
          }
        }
      };
    return (
      <WrapperContainer>
        <HeaderComp/>
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>

     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


        <View style={{flex:1,padding:moderateScale(16)}}>

      
        <View style={{flex:1}}>
         <TextComp text={strings.ENTER_THE_FOUR_DIGIT} style={styles.headerStyle}/>
         <TextComp text={strings.EDIT_MY_EMAIL} style={styles.descStyle}/>

        
         <OTPTextView
          ref={input}
          containerStyle={styles.textInputContainer}
          handleTextChange={setOtpInput}
          handleCellTextChange={handleCellTextChange}
          inputCount={4}
          keyboardType="numeric"
          textInputStyle={styles.roundedTextInput}
          autoFocus
          tintColor={colors.whiteColor}
          offTintColor={colors.whiteColor}
        />
     
      
        
        </View>

        {
            timer > 0 ?<View>
            <TextComp 
            text={strings.RESEND_CODE+" "+ 'in'+ " "+`${timer}`} 
            style={{
                ...styles.descStyle,
                marginBottom:moderateScale(5),
                fontSize:textScale(15),
                }}>
               
             </TextComp>
        </View> : <Text onPress={()=>setTimer(59)} style={styles.resendStyle}>{strings.RESEND_CODE}</Text>
        }

        <ButtonComp
        text={strings.LOGIN}
        style={{marginBottom:moderateScale(24)}}
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
        marginBottom:moderateScaleVertical(52),
        color:colors.blueColor
    },
    textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        borderRadius:moderateScale(5),
        borderBottomWidth:0,
        backgroundColor:colors.gray2,
        color:colors.whiteColor
      },
      resendStyle:{
        marginBottom:10,
        color:colors.blueColor
      }

});

//make this component available to the app
export default OtpVerification;
