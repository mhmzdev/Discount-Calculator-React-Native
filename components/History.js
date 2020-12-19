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
} from 'react-native';

export default function History({ navigation, route }) {
  const dataObj = route.params.historyObject;

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
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
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
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />
      </DataTable>
      <TouchableOpacity onPress={() => {}} style={styles.clearHistoryBtn}>
        <Text style={styles.clearHistoryBtnText}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '20',
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
    color: '#b5c1c6',
  },
});
