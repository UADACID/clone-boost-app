/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class RedirectSearchBar extends Component {
  render() {
    return (
      <View style={{width, height:80, padding: 16}}>
        <TouchableOpacity
          onPress={this.props.onPress}
          activeOpacity={.8} style={styles.searchWraper}>
          <Text style={{fontSize:16, color:'gray'}}>Search in your city</Text>
          <Icon name='ios-search' style={{fontSize:19, color:'gray'}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchWraper: {
    flex:1,
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:3,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:16,
    paddingRight:16,
    justifyContent:'space-between'
  }
});
