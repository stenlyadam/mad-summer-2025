import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NullPhoto} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);

  const getImage = async () => {
    const result = await launchCamera({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });
    if (result.didCancel) {
      showMessage({
        message: 'Ambil foto dibatalkan',
        type: 'danger',
      });
    } else {
      const data = result.assets[0];
      const photoBased64 = `data:${data.type};base64, ${data.base64}`;
      setPhoto({uri: photoBased64});
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Header
        text="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
              <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={26} />
        <TextInput text="Full Name" placeholder="Enter your full name" />
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
        />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button text="Continue" onPress={() => navigation.navigate('SignIn')} />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileBorder: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
