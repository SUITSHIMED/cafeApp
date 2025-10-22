// page/HomePage.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cafeName}>AppCafé</Text>
      <Button
        title="Voir le menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  cafeName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#5D4037', // optional: coffee brown color
    textAlign: 'center',
  },
});