import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>hhh</Text>
      <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
