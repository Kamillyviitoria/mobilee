import { FlatList, StyleSheet, View } from 'react-native';
import { Text, List } from 'react-native-paper';
import React from 'react';

const jogadores = [
  { id: '1', nome: 'Jogador 1' },
  { id: '2', nome: 'Jogador 2' },
  { id: '3', nome: 'Jogador 3' },
];

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Lista de Jogadores</Text>
      <FlatList
        data={jogadores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            left={() => <List.Icon icon="account" />}
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
