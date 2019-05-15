import React, { Component, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

function Imc() {

    const [altura, setAltura] = useState(0);
    const [massa, setMassa] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [resultText, setResultText] = useState(``);
  
    function calcular() {
      let imc = massa / (altura * altura);
      setResultado(imc);
      Keyboard.dismiss();
      if (imc < 16) {
        setResultText('Magreza grave');
      } else if (imc < 17) {
        setResultText('Magreza moderada');
      } else if (imc < 18.5) {
        setResultText('Magreza leve');
      } else if (imc < 25) {
        setResultText('Saudável');
      } else if (imc < 30) {
        setResultText('Sobrepeso');
      }else if (imc < 35) {
        setResultText('Obesidade I');
      }else if (imc < 40) {
        setResultText('Obesidade II');
      }else {
        setResultText('Obesidade III');
      }
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => { setAltura(altura) }} />
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) => { setMassa(massa) }} />
        </View>
        <TouchableOpacity onPress={calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.result}>{resultado.toFixed(2)}</Text>
        <Text style={[styles.result, { fontSize: 35 }]}>{resultText}</Text>
      </View>
    );
  
  }
  export default Imc;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize: 50,
    marginTop: 24
  },
  button: {
    backgroundColor: '#022445'
  },

  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  entradas: {
    flexDirection: 'row'
  },

  result: {
    alignSelf: 'center',
    color: '#554F4E',
    fontSize: 65,
    padding: 15
  }
});