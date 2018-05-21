/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import FeedItem from './feedItem';

export default class Feed extends Component {

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => (
    <FeedItem />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[1,2,3,4]}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff'
  },
});
