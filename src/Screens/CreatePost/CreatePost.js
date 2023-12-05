//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import WrapperContainer from '../../components/WrapperContainer';
import HeaderComp from '../../components/HeaderComp';
import strings from '../../constants/lang';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ButtonComp from '../../components/ButtonComp';
import { height, moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../Navigations/navigationStrings';
import colors from '../../styles/colors';
import ImagePicker from 'react-native-image-crop-picker';


// create a component
const CreatePost = ({navigation}) => {
 const [photos,setPhotos] = useState([]);
 const [selectedImages,setSelectedImages]=useState([]);
 const [currentImage,setCurrentImage  ]=useState({});



  async function hasAndroidPermission() {
    const getCheckPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return Promise.all([
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          ),
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          ),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
      }
    };

    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      return true;
    }
    const getRequestPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          statuses =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
              PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };

    return await getRequestPermissionPromise();
  }

  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    let data= await CameraRoll.getPhotos({first:40,assetType:'Photos'})
    const result=  data.edges.map((item,index)=>(item.node)).reverse()
    setCurrentImage(result[0])
    setPhotos(result)
    
  }

  useEffect(()=>{
    savePicture()
  },[])

  const onSelect=(item,index)=>{
  
    let clonePhotos=[...photos]
    clonePhotos[index].isSelected=!item?.isSelected;

    setPhotos(clonePhotos)
    setCurrentImage(item)

    let cloneSelectImg =[...selectedImages]

    const indexItem=cloneSelectImg.findIndex(val=> val.timestamp === item?.timestamp)
 
    if(indexItem == -1){
  
    setSelectedImages(prev => [...prev,...[item]])

    }else{
      cloneSelectImg.splice(indexItem,1)
      setSelectedImages(cloneSelectImg)
    }


  }

  const onNextPress=()=>{
    return(
      navigation.navigate(navigationStrings.ADD_POST,{selectedImages})
    )
  }

  const openCamera=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      navigation.navigate(navigationStrings.ADD_POST,{selectedImages:[{image:image}]})
    }).catch(err=>(
      console.log(err)
    ));
  }

  const  renderItem=({item,index})=>{
    return (
        <TouchableOpacity onPress={()=>onSelect(item,index)}  style={{flex:1}}>
            <Image
            source={{uri : item?.image?.uri}}
            style={{
                height:width/4,
                width:width/4,
                borderWidth:0.5,
                borderColor:'black'
            }}
            />
            {
                !!item?.isSelected ? (  <Image 
                    source={imagePath.icCheck}
                    style={
                      styles.checkStyle
                    }
                    
                    />) : null
            }
        </TouchableOpacity>
    )
  }

  const ListHeaderComponent =()=>{
    return(
        <View style={{marginBottom:moderateScaleVertical(16)}}>
            {!!currentImage?.image && currentImage?.image?.uri ? (   <Image
            source={{uri:currentImage?.image?.uri}}
            style={styles.parentImage}
            />) : null}
         
        </View>
    )
        
    
  }

  return (
    <WrapperContainer>
      <HeaderComp 
      leftText={strings.ADD_POST} 
      isLeftImage={false} 
      rightText={strings.NEXT} 
      onPressRight={onNextPress}
      />
      <View style={{flex: 1}}>

         <FlatList
         numColumns={4}
         data={photos}
         renderItem={renderItem}
         ListHeaderComponent={ListHeaderComponent}   
         />
      </View>
      
      <TouchableOpacity
      style={styles.cameraBtn}
      onPress={openCamera}
      >
      <Image
      source={imagePath.icCamera}
      />
      </TouchableOpacity>
   
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({

  parentImage:{
    width:'100%',
    height:height/3,
    objectFit:'cover',
  },
  checkStyle:{
    position:'absolute',
    right:10,
    bottom:10
  },

  cameraBtn:{
    width:moderateScale(60),
    height:moderateScale(60),
    borderRadius:moderateScale(30),
    backgroundColor:colors.redColor,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:moderateScale(20),
    bottom:moderateScale(20),
  }
});

//make this component available to the app
export default CreatePost;
