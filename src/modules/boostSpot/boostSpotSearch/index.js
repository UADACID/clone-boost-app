/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import DefaultHeader from '../../../components/defaultHeader';

export default class BoostSpotSearch extends Component {

  static navigationOptions = ({navigate}) => ({
      header: () => (
        <DefaultHeader hasSearch={true} hasClear={true}/>
      )
  })

  state = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the BoostSpotSearch component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
