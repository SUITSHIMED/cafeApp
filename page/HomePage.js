import React from 'react';
import { View, Text} from 'react-native';
import { Button } from 'react-native';

export default function HomePage({}) {
  return(
    <View>
      <Text>hhh</Text>
      <Button title="go page menu" onPress={()=> navigation.navigate('Menu')}/>
    </View>
  )
}
