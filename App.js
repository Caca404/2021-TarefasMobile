import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro mobile app!</Text>
      <Button title="Já sei construir um app mobile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
