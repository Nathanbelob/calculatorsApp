import React, { useState, Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import ResultDisplay from './Display';

function Buttons(props) {

  const [totalValue, setTotalValue] = useState(``);

  function show(value){
    const oldValue = totalValue;
    const newValue = oldValue + value;
    setTotalValue(newValue);
  }



    return (
        <View style = {styles.parent}>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.cell}>
            <View>
              <Text style = {styles.textClean}>C</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={() => {show("1")}}>
            <View>
              <Text style = {styles.text}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={() => {show("2")}}>
            <View>
              <Text style = {styles.text}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.cell}>
            <View>
              <Text style = {styles.text}>Sen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.cell}>
            <View>
              <Text style = {styles.text}>Cos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} >
            <View>
              <Text style = {styles.text}>*</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Buttons;

const styles = StyleSheet.create({
    parent: {
        flex: 2,
        padding: 2,
        flexDirection: 'row',
      },
      row: {
        flex: 1,
        flexDirection: 'column',
      },
      cell: {
        flex: 1,
        backgroundColor: '#CFCECE',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 40,
        fontWeight: 'bold'
      },
      textClean: {
        fontSize: 40,
        color: "#EE8618",
        fontWeight: 'bold'
      }, 

      parentDisplay: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
      },
      textDisplay: {
        fontSize: 70,
        fontWeight: 'bold',
      }
    
  });