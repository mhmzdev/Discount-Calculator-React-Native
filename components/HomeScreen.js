import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// options={{
//             headerShown: false,
//             title: 'My home',
//             headerStyle: {
//               backgroundColor: '#33bf5c',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}

export default function HomeScreen({ navigation, route }) {
  // All States
  const [originalPrice, setOriginalPrice] = useState('0.00');
  const [discountPrc, setDicountPrc] = useState('');
  const [savedAmount, setSavedAmount] = useState('0.00');
  const [finalPrice, setFinalPrice] = useState('0.00');
  const [calError, setCalError] = useState('');

  const calculateDiscount = () => {
    if (discountPrc < 100 && originalPrice >= 0 && discountPrc >= 0) {
      var saved = (originalPrice * discountPrc) / 100;
      var final_Price = originalPrice - saved;
      setSavedAmount(saved.toFixed(2));
      setFinalPrice(final_Price.toFixed(2));
      setCalError('');
    } else if (discountPrc >= 100) {
      setCalError('Discount Cannot be greater than 99%');
    } else if (originalPrice < 0 || discountPrc < 0) {
      setCalError('Original Price or Discount Price must be greater than 0');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }} />
      <Text style={styles.heading}>Discount Calculator</Text>
      <View style={{ marginTop: 80 }} />

      {/* Output Results */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.resultText}>Final Price :</Text>
        <Text style={styles.finalPriceText}> Rs {finalPrice}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.resultText}>You Saved :</Text>
        <Text style={[styles.finalPriceText, { color: '#33bf5c' }]}>
          {' '}
          Rs {savedAmount}
        </Text>
      </View>
      <View style={{ marginTop: 30 }} />

      {/* Text Fields */}
      <TextInput
        keyboardType={'number-pad'}
        onChangeText={(orgPrice) => setOriginalPrice(orgPrice)}
        style={styles.textFields}
        placeholder={'Original Price'}
        placeholderTextColor="#b5c1c6"
      />
      <View style={{ paddingTop: 10 }} />
      <TextInput
        keyboardType={'number-pad'}
        onChangeText={(discountPercentage) => setDicountPrc(discountPercentage)}
        style={styles.textFields}
        placeholder={'Discount %'}
        placeholderTextColor="#b5c1c6"
        maxLength={2}
      />
      <View style={{ paddingTop: 20 }} />

      <TouchableOpacity
        onPress={() => calculateDiscount()}
        style={styles.calcBtn}>
        <Text style={styles.calcBtnText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: '100',
    letterSpacing: 2,
  },
  textFields: {
    height: 50,
    width: 280,
    borderColor: '#b5c1c6',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 10,
    color: 'white',
  },
  calcBtn: {
    height: 50,
    width: 200,
    backgroundColor: '#33bf5c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 2,
  },
  calcBtnText: {
    fontSize: 20,
    color: 'white',
  },
  resultText: {
    fontSize: 25,
    color: '#b5c1c6',
  },
  finalPriceText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
