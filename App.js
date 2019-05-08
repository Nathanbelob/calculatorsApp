/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component, useState } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Imc from "./screens/Imc";
import Calculadora from "./screens/Calculadora";



function App() {

  return (
    <AppDrawerNavigator/>
  );
}

const AppDrawerNavigator = createDrawerNavigator({
  IMC: Imc,
  Calculadora: Calculadora
})

export default App;

