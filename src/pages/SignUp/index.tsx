import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NullPhoto} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });
    console.log(result);
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
              <Image source={NullPhoto} />
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
});
