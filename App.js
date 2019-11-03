
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';

import Header from './src/components/Header';
import CardTabuada from './src/components/CardTabuada';

export default function Principal() {

  const [tabuada] = useState([
    {
      key: '2', nome: 'Tabuada do 2'
    },
    {
      key: '3', nome: 'Tabuada do 3'
    },
    {
      key: '4', nome: 'Tabuada do 4'
    },
    {
      key: '5', nome: 'Tabuada do 5'
    },
    {
      key: '6', nome: 'Tabuada do 6'
    },
    {
      key: '7', nome: 'Tabuada do 7'
    },
    {
      key: '8', nome: 'Tabuada do 8'
    },
    {
      key: '9', nome: 'Tabuada do 9'
    },
    {
      key: '10', nome: 'Tabuada do 10'
    },
    {
      key: '11', nome: 'Tabuada do 11'
    },
    {
      key: '12', nome: 'Tabuada do 12'
    },
    {
      key: '13', nome: 'Tabuada do 13'
    },
    {
      key: '14', nome: 'Tabuada do 14'
    },
    {
      key: '15', nome: 'Tabuada do 15'
    },
    {
      key: '16', nome: 'Tabuada do 16'
    },
    {
      key: '17', nome: 'Tabuada do 17'
    },
    {
      key: '18', nome: 'Tabuada do 18'
    },
    {
      key: '19', nome: 'Tabuada do 19'
    },
    {
      key: '20', nome: 'Tabuada do 20'
    },
  ]);

  const [i, setI] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [j, setJ] = useState();

  return (
    <View style={styles.content}>

      <View>
        <Header />

        <FlatList
          data={tabuada}
          style={{ marginTop: 15 }}
          horizontal
          keyExtractor={(tabuadaa) => tabuadaa.key}
          showsHorizontalScrollIndicator={false}//remove a barra de rolagem 
          renderItem={({ item }) => (
            <CardTabuada tabuada={item} _onPress={() => calculo(item.key)} />
          )}
        />

      </View >

      <View>
        {j ?
          <View style={styles.container}>
            {i.map(i => <Text key={i} style={styles.result}>{j} x {i} = {j * i}</Text>)}
          </View>
          : null}
      </View>

    </View>
  );

  function calculo(item) {
    //console.log(item);
    setJ(item);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    padding: 1
  },
  cardCalc: {
    flex: 1,
    marginTop: 10
  },
  result: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 1
  }
});