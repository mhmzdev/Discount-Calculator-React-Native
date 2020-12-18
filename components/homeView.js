import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation, route }) {
    return (
        <View style={styles.mainView}>
            <Text>Home Screen components</Text>
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