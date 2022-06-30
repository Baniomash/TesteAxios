import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { useState } from 'react';
const axios = require('axios').default;


export default function CatButton() {
  
  const [catFact, setCatFact] = useState("...");

  async function getCatFact(){
    const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
  };
  
  return (
    <View style={styles.container}>
      <Text>Pet the cat for cat facts</Text>
      <TouchableHighlight onPress={() => getCatFact()}>
        <View style={styles.button}>
          <Image style={styles.catImage} source={require('./fotoGato.png')} />
        </View>
      </TouchableHighlight>
      <Text>{catFact}</Text>
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  catImage: {
    width: 300,
    height: 300,
  },
});