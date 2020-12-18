import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function History({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <StatusBar backgroundColor="#196F3D" />
      <Text style={{ color: 'white' }}>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
