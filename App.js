import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.mainView}>
      <TextInput style={styles.textFields} placeholder={"Original Price"} />
      <View style={{ paddingTop: 10 }} />
      <TextInput style={styles.textFields} placeholder={"Discount %"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textFields: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  }
});

export default App;