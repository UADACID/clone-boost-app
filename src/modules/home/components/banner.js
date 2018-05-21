/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window')
const sliderWidth = width;
const itemWidth = width;

export default class Banner extends Component {

  state = {
    entries : [1,2,3,4],
    activeSlide : 0
  }

  _renderItem ({item, index}) {
    return (
      <View>
        <Image style={{width, height: width / 2.5}} resizeMode="contain"
          source={require('../../../assets/home/ex_slider.png')}/>
      </View>
    );
  }

  get pagination () {
      const { activeSlide, entries } = this.state;
      // const entries = images
      return (
          <Pagination
            firstItem={2}
            ref='pagination'
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{
              backgroundColor: '#ffffff',
              height:20,
              paddingTop:20,
              paddingBottom: 20
            }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#d1d3d4',
            }}
            inactiveDotStyle={{
              backgroundColor : '#d1d3d4',
                // Define styles for inactive dots here
            }}
            dotContainerStyle={{
              height:10,
              width:10,
              paddingRight:0
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}/>
      );
  }

  onSnapToItem = (index) => {

    this.setState({ activeSlide: index })
    if (index == 2) {
      //navigate to other screen
      setTimeout(()=>{
          // this.skipIntro();
        // navigate('ChooseUserType')
      }, 3000);

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          loop={true}
          autoplay={true}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          autoplayDelay={1500}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={this.onSnapToItem}/>
        { this.pagination }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
