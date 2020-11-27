import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const App = () => {

  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrc, setDicountPrc] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  calculateDiscount = () => {
    var saved = (originalPrice * discountPrc) / 100;
    var final_Price = originalPrice - saved;
    setSavedAmount(saved);
    setFinalPrice(final_Price);
  }

  return (
    <View style={styles.mainView}>
      <TextInput keyboardType={"number-pad"} onChangeText={(orgPrice) => setOriginalPrice(orgPrice)} style={styles.textFields} placeholder={"Original Price"} />
      <View style={{ paddingTop: 10 }} />
      <TextInput keyboardType={"number-pad"} onChangeText={(discountPercentage) => setDicountPrc(discountPercentage)} style={styles.textFields} placeholder={"Discount %"} />
      <View style={{ paddingTop: 10 }} />
      <TouchableOpacity onPress={() => calculateDiscount()} style={styles.calcBtn}>
        <Text style={styles.calcBtnText}>Calculate</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 50 }} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.resultText}>Final Price :</Text>
        <Text style={styles.finalPriceText}> Rs {finalPrice}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.resultText}>You Saved :</Text>
        <Text style={styles.finalPriceText}> Rs {savedAmount}</Text>
      </View>

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
    height: 50,
    width: 280,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 10,
  },
  calcBtn: {
    height: 50,
    width: 200,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  calcBtnText: {
    fontSize: 24,
    color: 'white'
  },
  resultText: {
    fontSize: 20,
  },
  finalPriceText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;