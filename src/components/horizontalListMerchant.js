/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class HorizontalListMerchant extends Component {

  static defaultProps = {
    listData : []
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => (
    <View style={{marginLeft:8}}>
      <ImageBackground
        resizeMode='cover'
        style={{width : width / 2.5, height: width / 2.5}}
        source={require('../assets/merchant-thumb.jpg')}
      >

      </ImageBackground>
      <View style={{paddingTop:12, paddingBottom:12}}>
        <Text>Merchant Name</Text>
      </View>
    </View>
  );

  render() {
    const { listData, onPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity
            onPress={onPress}
            style={{flexDirection: 'row', alignItems:'center', paddingRight:8}}>
            <Text style={[styles.title,{fontSize:14}]}>View all</Text>
            <Icon name='ios-arrow-forward' style={[styles.title,{fontSize:20, marginLeft:10}]}/>
          </TouchableOpacity>
        </View>
        {/*listData.length == 0 ? <NotFoundLocation /> : false*/}
        <View style={{marginLeft:8}}>
          <FlatList
            data={[1,2,3,4]}
            horizontal={true}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

const NotFoundLocation = () => {
  return (
    <View style={{width, alignItems:'center'}}>
      <Image
        source={require('../assets/graphic_turn_on_location.png')}
        style={{width: 214, height: 80, marginBottom: 8}}/>
      <Text style={styles.titleNotif}>Location not found</Text>
      <View style={{paddingLeft: 54, paddingRight: 54}}>
        <Text style={styles.descNotif}>Please turn on your Location Service to find Boost Spot nearby</Text>
      </View>
      <TouchableOpacity style={{padding: 20}}>
        <Text style={styles.buttonTurnOn}>Turn On Location</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor:'#e0e0e0',
    // marginBottom: 24,
    paddingTop:24
  },
  titleContainer: {
    paddingLeft: 16,
    paddingBottom: 18,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color:'#000'
  },
  titleNotif:{
    color:'#000',
    fontSize: 16
  },
  descNotif: {
    textAlign: 'center',
    color: 'gray'
  },
  buttonTurnOn:{
    color:'#FF6347',
    fontSize: 16
  }
});
