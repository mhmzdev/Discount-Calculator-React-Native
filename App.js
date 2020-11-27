import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const App = () => {

  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPrc, setDicountPrc] = useState("");
  const [savedAmount, setSavedAmount] = useState("0.00");
  const [finalPrice, setFinalPrice] = useState("0.00");

  const [calError, setCalError] = useState("");

  const [history, setHistory] = useState(["Original Price - Discount % - Final Price"]);


  calculateDiscount = () => {
    if (discountPrc <= 100 && originalPrice >= 0 && discountPrc >= 0) {
      var saved = (originalPrice * discountPrc) / 100;
      var final_Price = originalPrice - saved;
      setSavedAmount(saved.toFixed(2));
      setFinalPrice(final_Price.toFixed(2));
      setCalError("")
    } else if (discountPrc > 100) {
      setCalError("Discount Cannot be greater than 100%");
    } else if (originalPrice < 0 || discountPrc < 0) {
      setCalError("Original Price or Discount Price must be greater than 0");
    }
  }

  saveResult = () => {
    var dash = "--";
    var result = originalPrice + dash + discountPrc + "% " + dash + finalPrice;
    console.log(result);
    setHistory(oldHistory => [...history, result]);

    setOriginalPrice("");
    setDicountPrc("");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discount Calculator</Text>
      </View>
      <View style={styles.mainView}>
        <TextInput keyboardType={"number-pad"} value={originalPrice} onChangeText={(orgPrice) => setOriginalPrice(orgPrice)} style={styles.textFields} placeholder={"Original Price"} />
        <View style={{ paddingTop: 10 }} />
        <TextInput keyboardType={"number-pad"} value={discountPrc} onChangeText={(discountPercentage) => setDicountPrc(discountPercentage)} style={styles.textFields} placeholder={"Discount %"} />
        <View style={{ paddingTop: 20 }} />
        <TouchableOpacity onPress={() => calculateDiscount()} style={styles.calcBtn}>
          <Text style={styles.calcBtnText}>Calculate</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 10 }} />
        <Text style={{ fontSize: 15, color: 'red' }}>{calError}</Text>
        <View style={{ paddingTop: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.resultText}>Final Price :</Text>
          <Text style={styles.finalPriceText}> Rs {finalPrice}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.resultText}>You Saved :</Text>
          <Text style={[styles.finalPriceText, { color: 'green' }]}> Rs {savedAmount}</Text>
        </View>
        <View style={{ paddingTop: 15 }} />
        <TouchableOpacity onPress={() => saveResult()} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save Result</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#CB4335',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 8.0,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  headerText: {
    fontSize: 24,
    color: 'white'
  },
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
    backgroundColor: '#CB4335',
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
  },
  saveBtn: {
    height: 35,
    width: 150,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  saveBtnText: {
    fontSize: 18,
    color: 'white'
  },
});

export default App;