import { FlatList, StyleSheet, View } from 'react-native';
import { Text, List } from 'react-native-paper';
import React from 'react';

const titulos = [
  { id: '1', nome: 'Campeonato 2001' },
  { id: '2', nome: 'Copa 2005' },
  { id: '3', nome: 'Supercopa 2010' },
];

export default function TitulosScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Títulos Conquistados</Text>
      <FlatList
        data={titulos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            left={() => <List.Icon icon="trophy" />}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10
  }
});
