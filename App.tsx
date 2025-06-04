import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <View>
      <Text style={style.text}>Hello World</Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
