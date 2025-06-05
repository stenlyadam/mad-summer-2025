import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <View>
      <View style={style.container}>
        <Text style={style.text}>Basic React Native</Text>
      </View>
      <Image style={style.img1} source={require('./assets/foto.jpg')} />
      <Image
        style={style.img1}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'yellow',
  },
  img1: {
    height: 200,
    width: 150,
  },
});
