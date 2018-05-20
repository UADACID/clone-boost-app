/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Coupon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>1,190</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text: {
    fontWeight: 'bold', 
    fontSize: 16, 
    marginLeft: 10, 
    color: '#fff'
  }
});
