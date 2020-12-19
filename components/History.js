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
              <View>
                <DataTable.Row>
                  <DataTable.Cell>{item.original_Price}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    {item.discount_Percentage}%
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {item.final_Price_Var}
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            );
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
});
