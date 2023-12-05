//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import HeaderComp from '../../components/HeaderComp';
import {moderateScale, width} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import ImagePicker from 'react-native-image-crop-picker';
import strings from '../../constants/lang';
import ButtonComp from '../../components/ButtonComp';
import MultiTextInput from '../../components/MultiTextInput';

// create a component
const AddPost = ({navigation, route}) => {
  const [images, setImages] = useState(route?.params?.selectedImages || []);
  const [desc, setDesc] = useState(route?.params?.selectedImages || []);





  function openCamera() {
    ImagePicker.openCamera({
      mediaType: 'photo',
    }).then(image => {
      setImages(pre => [...pre, ...[{image: image}]]);
    });
  }
  function openGallery() {
    ImagePicker.openPicker({
      mediaType: 'photo',
    }).then(image => {
      setImages(pre => [...pre, ...[{image: image}]]);
    });
  }

  const onAdd = () => {
    if (images?.length >= 4) {
      return alert('you add only four image');
    }
    Alert.alert(`Upload Image`, 'Choose an option', [
      {text: 'Cancel', onPress: () => {}},
      {text: 'Camera', onPress: () => openCamera()},
      {text: 'Gallery', onPress: () => openGallery()},
    ]);
  };

  function removeImage(index) {
     let cloneImages= [...images]
     cloneImages.splice(index,1)
     setImages(cloneImages)

  }


  const renderItem = (item, index) => {
    console.log("item",item)
    return (
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onAdd(item, index)}
      style={{ marginRight: moderateScale(16)}}
  >
      <Image
          source={{ uri: item?.image?.uri || item?.image?.path }}
          style={styles.imgStyle}
      />

      <Pressable
          onPress={() => removeImage(index)}
          style={styles.crossStyle}
      >
          <Image
              source={imagePath.icCross} />
      </Pressable>
  </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
    <HeaderComp leftText='Create post' />

    <View style={styles.container}>

        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ overflow: 'visible' }}
            >
                {images?.length > 0 ? images.map((val, i) => {
              
                    return renderItem(val, i)
                })
                    : null
                }

                <TouchableOpacity
                    onPress={onAdd}
                    style={{
                        ...styles.imgStyle,
                        backgroundColor: colors.gray2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image style={{ tintColor: colors.whiteColor }} source={imagePath.icAdd} />
                </TouchableOpacity>

            </ScrollView>
            <MultiTextInput
            value={desc}
            placeholder={strings.DESCRIPTION}
            onChangeText={value => setDesc(value)}
            multiline={true}
            inputStyle={{marginVertical:moderateScale(24)}}
          />


       
        </View>

        <ButtonComp
         text={strings.SAVE}
        />

    </View>

</WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    justifyContent: 'space-between'

},
imgStyle: {
    height: width / 4,
    width: width / 4,
    borderRadius: moderateScale(8)
},
crossStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    tintColor: colors.redColor
},
});

export default AddPost;
