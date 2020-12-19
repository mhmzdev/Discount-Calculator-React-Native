import * as React from 'react';
import { useState } from 'react';
import { DataTable } from 'react-native-paper';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Modal,
} from 'react-native';

export default function History({ navigation, route }) {
  const [dataObj, setDataObj] = useState(route.params.historyObject);
  const [modalVisible, setModalVisible] = useState(false);

  const clearHistory = () => {
    for (let i = 0; i < dataObj.length; i++) {
      setDataObj(delete dataObj[i]);
    }
  };

  const removeRecord = (index) => {
    setDataObj(delete dataObj[index]);
  };

  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor="#196F3D" />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Original Price</DataTable.Title>
          <DataTable.Title numeric>Discount %</DataTable.Title>
          <DataTable.Title numeric>Final Price</DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={dataObj}
          renderItem={({ item, index }) => {
            if (item != undefined) {
              return (
                <TouchableOpacity onPress={() => removeRecord(index)}>
                  <DataTable.Row>
                    <DataTable.Cell>Rs {item.original_Price}</DataTable.Cell>
                    <DataTable.Cell numeric>
                      {item.discount_Percentage}%
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                      Rs {item.final_Price_Var}
                    </DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              );
            }
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />
      </DataTable>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you Sure?</Text>
            <Text style={{ color: '#E74C3C' }}>History will be deleted!</Text>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
              }}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  clearHistory();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </TouchableOpacity>
              <View style={{ paddingLeft: 20 }} />
              <TouchableOpacity
                style={[styles.modalBtn, { backgroundColor: '#33bf5c' }]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.deleteRecordTxt}>Tap on a Record to Delete!</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.clearHistoryBtn}>
          <Text style={styles.clearHistoryBtnText}>Clear History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 50,
    // backgroundColor: 'black',
  },
  clearHistoryBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E74C3C',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    width: 100,
  },
  clearHistoryBtnText: {
    fontSize: 13,
    color: '#E74C3C',
  },
  deleteRecordTxt: {
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 280,
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  modalBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    padding: 10,
    width: 80,
    height: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    color: 'white',
  },
});
