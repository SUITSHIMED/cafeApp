import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, } from 'react-native';

export default function MenuPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/img1.jpeg')}
      style={styles.background}
    >
      <Text style={styles.title}>Notre Menu</Text>

      <View style={styles.prodacte}>
        <View style={styles.card}>
          <Image source={require('../assets/img1.jpeg')} style={styles.image}/>
          <Text>Cappuccino</Text>
          <Text>$15</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/img2.jpeg')} style={styles.image}/>
          <Text>Cappuccino</Text>
          <Text>$15</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/img3.jpeg')} style={styles.image}/>
          <Text>Latte</Text>
          <Text>$30</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/img1.jpeg')} style={styles.image}/>
          <Text>Mocha</Text>
          <Text>$20</Text>
        </View>
      </View>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    textAlign: "center",
    backgroundColor: "rgba(250, 135, 3, 0.7)", 
    fontSize: 35,
    margin: 20,
    borderRadius: 35,
    padding: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  prodacte: {
    flexDirection: 'row',     
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 150, 
    padding: 10,
    marginVertical: 10, 
    borderRadius: 15,
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});