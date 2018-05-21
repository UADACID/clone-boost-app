/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class FeedItem extends Component {

  state = {
      readMore : false
  }

  render() {
    const { readMore } = this.state;
    return (
      <View>
        <View style={styles.titleContainer}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
              resizeMode='contain'
              style={{width: 40, height: 40, marginRight:10}}
              source={{uri:'https://img7.androidappsapk.co/300/3/2/f/my.com.myboost.png'}}/>
            <Text style={{fontWeight:'bold'}}>Title Name</Text>
          </View>
          <Text style={{color:'gray'}}>18m</Text>
        </View>
        <Image
          resizeMode='cover'
          style={{width, height: width / 1.5}}
          source={{uri:'https://pbs.twimg.com/media/DUYUhNzU8AAAxLH.jpg'}}/>
        <View style={{padding:10}}>
          {readMore ? (
            <Text>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum,
              you need to be sure there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
              The generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
              <Text onPress={()=>this.setState({readMore: false})} style={{color:'#0073b2', paddingBottom:10, paddingLeft:20}}>show little</Text>
            </Text>
          ):(
            <Text>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
              by injected humour, or randomised word..<Text onPress={()=>this.setState({readMore: true})} style={{color:'#0073b2', paddingBottom:10, paddingLeft:20}}>read more</Text>
            </Text>
          )}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 10
  }
});
