import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MenuPage({ navigation }) {
  return (
    <View>
      <Text>salam</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
