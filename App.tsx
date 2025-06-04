import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <View>
      <View style={style.container}>
        <Text style={style.text}>Hello World</Text>
      </View>
      <View style={style.container}>
        <Text style={style.text}>Hello World</Text>
      </View>
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
});
