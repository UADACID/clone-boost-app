/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const BackButton = ({onPress}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
    <Image
      style={styles.icon}
      source={require('../assets/back_arrow_white.png')}/>
  </TouchableOpacity>
);

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 20,
    paddingTop: Platform.OS == 'ios' ? 30 : 20
  },
  icon: {
    width: 17,
    height: 16.5
  }
});
