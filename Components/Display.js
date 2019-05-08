import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

function Display() {
    return (
        <View style={styles.parent}>
            <Text style={styles.text}></Text>
        </View>
    );
}
export default Display;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'flex-end'
    },
    text: {
      fontSize: 70,
      fontWeight: 'bold',
    }
  
  });