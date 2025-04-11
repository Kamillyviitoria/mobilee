import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import React from 'react';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Escudo do Time</Text>
      <Card style={{ width: '90%', marginTop: 20 }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
});
