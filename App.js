/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import RootNavigation from './src/navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
         backgroundColor="#cf2d28"
         barStyle="light-content"/>
        <RootNavigation />
      </View>
    );
  }
}

console.disableYellowBox = true;
