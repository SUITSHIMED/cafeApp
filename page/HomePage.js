<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  const [themeColor, setThemeColor] = useState('#fff'); 
  const [message, setMessage] = useState(''); 

  
 useEffect(() => {
    const messages = [
      'Bienvenue à AppCafé ☕',
      'Découvrez nos délicieux cafés ☕🍪',
      'Profitez d’un moment de détente 🌿',
      'Touchez “Voir le menu” pour commencer 📖',
    ];
    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setMessage(messages[i]);
    }, 2000 ); 

    return () => clearInterval(interval);
  }, []);

  
  const changeTheme = () => {
    setThemeColor(themeColor === '#fff' ? '#FFD700' : '#fff'); 
  };

  return (
    <ImageBackground
      source={require('../assets/cafeeback.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={[styles.cafeName, { color: themeColor }]}>AppCafé</Text>
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Voir le menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={changeTheme}>
          <Text style={styles.buttonText}>Changer le thème</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  cafeName: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Cursive",
  },
  message: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fa8703',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonSecondary: {
    backgroundColor: '#6b4f1d',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
=======
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
>>>>>>> 10c98f3113ef237f40e1fec6d241c4d4023c57f4
