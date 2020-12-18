import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {

  return (
    <View styles={styles.mainView}>
      <Text>Hamza Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  }
});